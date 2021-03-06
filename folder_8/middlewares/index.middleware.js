const path = require("path");
const morgan = require("morgan");
const express = require("express");
const expressLayout = require("express-ejs-layouts");

module.exports = (app, BOOTSTRAP, FONT_AWESOME) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "..", "public")));
    app.use(express.static(path.join(__dirname, BOOTSTRAP)));
    app.use(express.static(path.join(__dirname, FONT_AWESOME)));

    if (process.env.NODE_ENV === "development") {
        app.use(morgan("dev"));
    }

    // view engine
    app.use(expressLayout);
    app.set("view engine", "ejs");
    app.set("layout", "./layouts/mainLayout");
    app.set("views", "views");
};
