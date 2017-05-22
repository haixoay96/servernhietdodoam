var express = require('express');
var router = express.Router();
var th = require('../data/th.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { t: th.t, h: th.h });
});

module.exports = router;
