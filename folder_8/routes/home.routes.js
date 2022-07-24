const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "blog",
        path: "/",
    });
});

module.exports = router;
