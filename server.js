const http = require("http");

http
  .createServer((req, resp) => {
    resp.write(
      "<h1>Hello,</h1><p>I am web developer and this is my first server code.</p>"
    );
    resp.end();
  })
  .listen(4600);
