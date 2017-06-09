const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const exec = require('child_process').exec;
const Mailgun = require('mailgun-js');
const configJSON = require('./config/config.json');

// Send status email
if (configJSON.mailgun_api_key != '') {
  exec('git tag -l --points-at HEAD', function(err, stdout) {
    const commitId = stdout;
    const currDate = new Date(Date.now()).toUTCString();
    const mailgun = new Mailgun({apiKey: configJSON.mailgun_api_key, domain: 'virajchitnis.com'});
    var mailgun_data = {
      from: 'no-reply@virajchitnis.com',
      to: 'chitnisviraj@gmail.com',
      subject: 'Website restarted at ' + currDate,
      html: '<p>The website was restarted at ' + currDate + '.</p><p>The current website version is <a href="https://github.com/virajchitnis/virajchitnis.com/tree/' + commitId + '">' + commitId + '</a>.</p>'
    }
    mailgun.messages().send(mailgun_data, function (err, body) {
      if (err) {
        console.error("got an error: ", err);
      }
      else {
        console.log(body);
      }
    });
  });
}

const app = express();
app.set('trust proxy', true);

configJSON.last_start_time = new Date(Date.now()).toUTCString();
const json = JSON.stringify(configJSON, null, 2);
fs.writeFile('./config/config.json', json, 'utf8');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser(configJSON.cookie_parser_secret));

app.use(express.static(__dirname + '/public', {
  setHeaders: setCustomCacheControl
}));
app.use('/dist', express.static(__dirname + '/config/dist'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use('/', require('./routes/pages'));
app.use('/', require('./routes/endpoints'));
app.use('/api', require('./routes/api'));

app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname, 'public', 'error.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).sendFile(path.resolve(__dirname, 'public', 'error50x.html'));
});

app.listen(port);
console.log("Server started on port " + port);

function setCustomCacheControl (res, path, stat) {
  if (express.static.mime.lookup(path) === 'text/html') {
    // Do not cache HTML files
    res.setHeader('Cache-Control', 'public, max-age=-1');
    res.setHeader("Expires", new Date(Date.now() - 1).toUTCString());
  }
  else {
    res.setHeader("Cache-Control", "public, max-age=31536000")
    res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
  }
}
