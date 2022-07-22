const path = require("path");
const express = require("express");
const app = express();
const homeRoute = require("./routes/home.routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes
app.use(homeRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
