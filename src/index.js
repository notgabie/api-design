import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log('hello from the server')
    res.end()
  }
});

server.listen(5501, () => {
  console.log("Server listening on 5501");
});
