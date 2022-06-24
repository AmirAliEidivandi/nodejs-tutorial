const http = require("http");
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

    switch (path) {
        case "":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home Page");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("About");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found...");
            break;
    }
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
