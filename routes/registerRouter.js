let express = require("express");
let router = express.Router();

// router.get("/", (req, res) => {
//     res.write("Register page");
//     res.end();
// });

//Get the register page
router.get("/", function (req, res) {
    res.render("Register");
});

module.exports = router;
