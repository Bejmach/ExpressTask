var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

module.exports = router;