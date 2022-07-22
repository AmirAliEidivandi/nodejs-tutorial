const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
const homeRoute = require("./routes/home.routes");

// middleware
require("./middlewares/index.middleware")(app);
require("./db/connectDB")(process.env.MONGO_URI);

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

// routes
app.use(homeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Example app listening in ${process.env.NODE_ENV} mode on port ${PORT}!`));
