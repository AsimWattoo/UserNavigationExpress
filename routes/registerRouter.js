let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.write("Register page");
    res.end();
});

module.exports = router;
