const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "my weblog",
    });
});

module.exports = router;
