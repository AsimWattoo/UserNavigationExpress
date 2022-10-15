let express = require('express');
let router = express.Router();

router.get("/view", (req, res) => {
    res.write("Admin Panel");
    res.end();
});

module.exports = router;
