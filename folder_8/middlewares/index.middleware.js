const path = require("path");
const morgan = require("morgan");
const express = require("express");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));

    if (process.env.NODE_ENV === "development") {
        app.use(morgan("dev"));
    }
};
