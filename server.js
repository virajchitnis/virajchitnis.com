const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const sys = require('sys')
const exec = require('child_process').exec;
const morgan = require('morgan');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

app.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/resume', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/apps', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/winery', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/credits', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post('/githook', function (req, res) {
  console.log('githook');
  xHubSig = req.headers['x-hub-signature'].substring(5);
  hmac = crypto.createHmac('sha1', 'somesecret');
  hmac.update(JSON.stringify(req.body));
  computedHubSig = hmac.digest('hex');
  if (xHubSig == computedHubSig) {
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("./githook.sh", puts);
    console.log(req.body);
    res.send({
      status: 'success'
    });
  }
  else {
    res.status(403).send({
      status: 'error'
    });
  }
});

app.get('/health', function (req, res){
  console.log('health');
    res.send(200, 'Up!');
});

app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log("Server started on port " + port);
