const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public', {
  maxAge: 315360000,
  setHeaders: setCustomCacheControl
}));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.use('/', require('./routes/pages'));
app.use('/', require('./routes/endpoints'));
app.use('/api', require('./routes/api'));

app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname, 'public', 'error.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).sendFile(path.resolve(__dirname, 'public', 'error.html'));
});

app.listen(port);
console.log("Server started on port " + port);

function setCustomCacheControl (res, path, stat) {
  if (express.static.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=-1');
    res.setHeader("Expires", new Date(Date.now() - 1).toUTCString());
  }
  else {
    res.setHeader("Expires", new Date(Date.now() + 315360000).toUTCString());
  }
}
