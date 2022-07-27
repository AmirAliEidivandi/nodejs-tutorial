const express = require("express");
const app = express();
const port = 3000;
const handleCallback = require("./middleware/handle.error");

app.get(
    "/myroute",
    handleCallback(async (req, res) => {
        const myError = new Error("My error!");
        myError.code = 500;
        throw myError;
    })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
