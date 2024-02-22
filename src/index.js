import http from "http";

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode(200).send("hi").end();
  }
});

server.listen(5501, () => {
  console.log("Server listening on 5501");
});
