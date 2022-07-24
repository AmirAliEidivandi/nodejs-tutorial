const express = require("express");
const app = express();
require("dotenv").config({
    path: "./config/config.env",
});
const homeRouter = require("./routes/home.routes");
const loginRouter = require("./routes/login.routes");
const dashboardRouter = require("./routes/dashboard.routes");

// env
const { MONGO_URI, PORT, NODE_ENV, BOOTSTRAP, FONT_AWESOME } = process.env;

// middleware
require("./middlewares/index.middleware")(app, BOOTSTRAP, FONT_AWESOME);
require("./db/connectDB")(MONGO_URI);

// routes
app.use("/admin", dashboardRouter);
app.use("/auth", loginRouter);
app.use(homeRouter);

app.listen(PORT, () => console.log(`Example app listening in ${NODE_ENV} mode on port ${PORT}!`));
