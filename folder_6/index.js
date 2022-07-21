const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
    console.log(req.cookies);
    res.cookie("name", "amirali", { maxAge: 50000 }).send("cookie has saved!");
});

app.get("/delete", (req, res) => {
    res.clearCookie("name").send("cookie deleted....");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
