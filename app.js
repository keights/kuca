const http = require('http');
const os = require('os');

const port = 8080;

const server = http.createServer((req, res) => {
  
  console.log("Request from " + req.connection.remoteAddress);

  const hostname = os.hostname();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`You've hit ${hostname}\n`);
});

server.listen(port, () => {
  console.log(`Kuca server starting at port:${port}`);
});
