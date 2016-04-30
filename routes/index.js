var express = require('express');
var router = express.Router();

router.use(express.static('public'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Horses' });
});

module.exports = router;