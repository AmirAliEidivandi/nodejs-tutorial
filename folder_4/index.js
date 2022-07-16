const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { setStatic } = require("./utils/statics.utils");
const todoRouter = require("./routes/todo.routes");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ejs
app.set("view engine", "ejs");
app.set("views", "views");

// statics
setStatic(app);

// routes
app.use("/api/todo", todoRouter);
app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "todo-list",
    });
});

// start server
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
