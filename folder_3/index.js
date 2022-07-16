const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine(
    "hbs",
    exphbs.engine({
        extname: "hbs",
        layoutsDir: "views/layouts",
        defaultLayout: "main",
        partialsDir: "views/partials",
    })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
    const arr = [{ name: "amirali" }, { name: "amir" }, { name: "ali" }];

    res.render("index", { pageTitle: "amir", names: arr, home: true, hasName: arr.length > 0 });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
