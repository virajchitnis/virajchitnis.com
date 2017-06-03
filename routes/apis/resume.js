const express = require('express');
const router = express.Router();
const newDevice = require('../../modules/new-device');
const configJSON = require('../../config/config.json');
const resumeJSON = require('../../config/resume.json');

router.get('/', function (req, res){
  res.status(200).send(resumeJSON.public);
});

router.get('/private', function (req, res){
  const apikey = req.headers['api-key'];
  if (apikey == configJSON.api_key) {
    newDevice('_vcid', res, req, configJSON.mailgun_api_key, configJSON.authorized_device_secret);
    res.status(200).send(resumeJSON.private);
  }
  else {
    res.status(403).send({
      status: "error"
    });
  }
});

module.exports = router;
