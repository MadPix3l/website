//Tyler Holland 2017

var express = require('express');
var router = express.Router();

/* GET contact me page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: "Contact Me"});
});

module.exports = router;
