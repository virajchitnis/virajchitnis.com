const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

router.get('/resume', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'resume.html'));
});

router.get('/apps', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'apps.html'));
});

router.get('/winery', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'winery.html'));
});

router.get('/credits', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'credits.html'));
});

module.exports = router;
