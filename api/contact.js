const http = require("http");

// create the Node http server
const server = http.createServer((req, response) => {
    // only accept POST
    if (req.method === "POST") {
        //read POST body (form data)
        let body = "";
        req.on("data", (data) => {
            body += data;
        });

        // handle POST received
        req.on("end", () => {
            console.log(body);

            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("success");
        });
    }
});

server.listen(2222);
