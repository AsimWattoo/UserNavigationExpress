var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/login", (req, res, next) => {
  res.redirect(`/password?email=${req.body.email}`);
});

router.get('/password', function(req, res, next) {
  res.render('password', { email: req.query.email });
});

router.post("/password", (req, res, next) => {
    res.redirect("/authentication/clock");
});

module.exports = router;
