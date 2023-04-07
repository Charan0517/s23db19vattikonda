var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('teacher', { title: 'Search Results teacher' });
});

module.exports = router;
