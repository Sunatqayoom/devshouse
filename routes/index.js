var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login-signup', function(req, res, next) {
  res.render('login-signup');
});

module.exports = router;
