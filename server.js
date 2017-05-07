const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const sys = require('sys')
const exec = require('child_process').exec;

// Serve static assets
app.use(express.static(__dirname + '/public'));

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

app.get('/githook', function (req, res) {
  xHubSig = req.headers['x-hub-signature'].substring(5);
  hmac = crypto.createHmac('sha1', 'somesecret');
  computedHubSig = hmac.digest('hex');
  if (xHubSig == computedHubSig) {
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("./githook.sh", puts);
  }
  res.send({});
});

app.get('/health', function (req, res){
    res.send(200, 'Up!');
});

app.listen(port);
console.log("Server started on port " + port);
