const express = require("express");
const app = express();
const port = 3000;

app.get("/about", (req, res) => {
    res.type("text/plain").send("hello world");
});

app.use((req, res) => {
    res.type("text/plain").status(404).send("404 - not found...");
});

app.use((err, req, res, next) => {
    console.error(err.message);
    res.type("text/plain").status(500).send("500 - Server Error");
});

app.listen(port, () => console.log(`server running on port ${port}`));
