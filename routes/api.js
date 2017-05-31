const express = require('express');
const router = express.Router();
const path = require('path');
const exec = require('child_process').exec;
const configJSON = require('../config.json');

router.get('/gitcommit', function (req, res){
  const apikey = req.headers['api-key'];
  if (apikey == configJSON.api_key) {
    exec('git rev-parse HEAD', function(err, stdout) {
      const commitId = stdout.substring(0,7);
      res.status(200).send({
        commit_id: commitId,
        updated_at: configJSON.last_start_time
      });
    });
  }
  else {
    res.status(403).send({
      status: "error"
    });
  }
});

module.exports = router;