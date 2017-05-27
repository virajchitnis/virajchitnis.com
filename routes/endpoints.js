const express = require('express');
const router = express.Router();
const path = require('path');
const sys = require('sys')
const exec = require('child_process').exec;
const crypto = require('crypto');
const configJSON = require('../config.json');

router.post('/githook', function (req, res) {
  xHubSig = req.headers['x-hub-signature'].substring(5);
  hmac = crypto.createHmac('sha1', configJSON.githook_secret);
  hmac.update(JSON.stringify(req.body));
  computedHubSig = hmac.digest('hex');
  if (xHubSig == computedHubSig) {
    if (req.body.ref == "refs/heads/master") {
      function puts(error, stdout, stderr) { sys.puts(stdout) }
      exec("./githook.sh", puts);
      res.send({
        status: 'success',
        code_updated: true
      });
    }
    else {
      res.send({
        status: 'success',
        code_updated: false
      });
    }
  }
  else {
    res.status(403).send({
      status: 'error'
    });
  }
});

router.get('/health', function (req, res){
  console.log('health');
  res.status(200).send('Up!')
});

module.exports = router;
