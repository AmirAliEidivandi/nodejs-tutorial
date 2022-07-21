const express = require("express");
const app = express();
const session = require("express-session");

// middleware
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: "amirali",
        cookie: {
            maxAge: 50000,
        },
    })
);

// routes
app.get("/", (req, res) => {
    console.log(`Session: ${req.session.page_view}`);
    if (req.session.page_view) {
        req.session.page_view++;
        res.send(`your visited in our website: ${req.session.page_view}`);
    } else {
        req.session.page_view = 1;
        res.send("welcome to our site");
    }
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
