const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { setStatic } = require("./utils/statics.utils");
const todoRouter = require("./routes/todo.routes");
const errorController = require("./controllers/404");
require("./db/database");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ejs
app.set("view engine", "ejs");
app.set("views", "views");

// statics
setStatic(app);

// routes
app.use("/admin", todoRouter);
app.use(todoRouter);

// error control
app.use(errorController.get404);

// connected database
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
