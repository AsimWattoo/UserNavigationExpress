let express = require('express')
let router = express.Router();

router.get('/clock', (req, res) => {
    res.write("Clock Page");
    res.end();
});

router.get("/2fa", (req, res) => {
   res.write("Two Factor Authentication Code");
   res.end();
});

router.get("/sms", (req, res) => {
   res.write("SMS Page");
   res.end();
});

module.exports = router;
