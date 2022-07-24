const router = require("express").Router();

router.get("/login", (req, res) => {
    res.render("login", {
        pageTitle: "login",
        path: "/login",
    });
});

module.exports = router;
