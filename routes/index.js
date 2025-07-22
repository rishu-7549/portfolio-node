var express = require('express');
require('dotenv').config();
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM projects', function (err, rows, fields) {
    if (err) throw err;
    res.render('index', {
      "rows": rows
    });
  });
});

module.exports = router;
