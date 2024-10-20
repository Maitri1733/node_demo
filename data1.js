import http from "http";
import data from "./data.js";
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(5000);
