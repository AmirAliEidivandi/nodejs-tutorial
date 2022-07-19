const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { setStatic } = require("./utils/statics.utils");
const todoRouter = require("./routes/todo.routes");
const errorController = require("./controllers/404");

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

// start server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
