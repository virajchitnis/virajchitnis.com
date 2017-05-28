const express = require('express');
const router = express.Router();
const path = require('path');
const exec = require('child_process').exec;
const sqlite3 = require('sqlite3').verbose();
const configJSON = require('../../config.json');

router.post('/', function (req, res){
  const apikey = req.headers['api-key'];
  if (apikey == configJSON.api_key) {
    var db = new sqlite3.Database('db.db3');
    db.serialize(() => {
      db.run("CREATE TABLE IF NOT EXISTS Inventory (barcode NUMBER, name TEXT)");

      var stmt = db.prepare("INSERT INTO Inventory VALUES (?, ?)");
      stmt.run([req.body.barcode, req.body.name]);
      stmt.finalize();

      db.get("SELECT * FROM Inventory WHERE barcode=?", req.body.barcode, function(err, row) {
        res.status(200).send({
          barcode: row.barcode,
          name: row.name
        });
      });
    });
    db.close();
  }
  else {
    res.status(403).send({
      status: "error"
    });
  }
});

router.get('/', function (req, res){
  const apikey = req.headers['api-key'];
  if (apikey == configJSON.api_key) {
    var db = new sqlite3.Database('db.db3');
    db.serialize(() => {
      var inventory = [];
      db.each("SELECT barcode, name FROM Inventory", (err, row) => {
        inventory.push({
          barcode: row.barcode,
          name: row.name
        });
      }, (err, rows) => {
        res.status(200).send(inventory);
      });
    });
    db.close();
  }
  else {
    res.status(403).send({
      status: "error"
    });
  }
});

router.get('/:barcode', function (req, res){
  const apikey = req.headers['api-key'];
  if (apikey == configJSON.api_key) {
    var db = new sqlite3.Database('db.db3');
    db.serialize(() => {
      db.get("SELECT barcode, name FROM Inventory WHERE barcode=?", req.params.barcode, function(err, row) {
        res.status(200).send({
          barcode: row.barcode,
          name: row.name
        });
      });
    });
    db.close();
  }
  else {
    res.status(403).send({
      status: "error"
    });
  }
});

module.exports = router;
