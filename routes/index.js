var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", (req, res, next) => {
  res.redirect("/password");
});

router.get('/password', function(req, res, next) {
  res.render('password', { title: 'Express' });
});

module.exports = router;
