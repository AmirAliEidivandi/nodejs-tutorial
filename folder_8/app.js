const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const homeRoute = require("./routes/home.routes");

// env
const { MONGO_URI, PORT, NODE_ENV, BOOTSTRAP, FONT_AWESOME } = process.env;

// middleware
require("./middlewares/index.middleware")(app, BOOTSTRAP, FONT_AWESOME);
require("./db/connectDB")(MONGO_URI);

// routes
app.use(homeRoute);

app.listen(PORT, () => console.log(`Example app listening in ${NODE_ENV} mode on port ${PORT}!`));
