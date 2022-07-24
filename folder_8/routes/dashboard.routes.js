const router = require("express").Router();

// Dashboard Route
router.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        pageTitle: "Admin Dashboard",
        path: "/dashboardm",
        layout: "./layouts/dashLayout",
    });
});

module.exports = router;
