let express = require('express')
let router = express.Router();

router.get('/clock', (req, res) => {
    res.write("Clock Page");
    res.end();
});

router.get("/2fa", (req, res) => {
   res.render('2fa');
});

router.get("/sms", (req, res) => {
   res.render('sms');
});

module.exports = router;
