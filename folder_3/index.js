const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
    const arr = [{ name: "amirali" }, { name: "amir" }, { name: "ali" }];

    res.render("index", { pageTitle: "amir", names: arr });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
