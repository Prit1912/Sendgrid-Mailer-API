import http from "http";

const server = http
  .createServer((req, res) => {
    res.end("Hello from the server");
  })
  .listen(4001);

console.log("server is runnig");

export default server;
