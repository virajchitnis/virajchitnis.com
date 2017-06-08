const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res){
    res.sendFile(path.resolve('public', 'index.html'));
});

router.get('/resume', function (req, res){
    res.sendFile(path.resolve('public', 'resume.html'));
});

router.get('/apps', function (req, res){
    res.sendFile(path.resolve('public', 'apps.html'));
});

router.get('/winery', function (req, res){
    res.sendFile(path.resolve('public', 'winery.html'));
});

router.get('/credits', function (req, res){
    res.sendFile(path.resolve('public', 'credits.html'));
});

router.get('/downloads', function (req, res){
    res.sendFile(path.resolve('public', 'downloads.html'));
});

module.exports = router;
