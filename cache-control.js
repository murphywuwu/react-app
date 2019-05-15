const http = require('http');

const server = http.createServer((req, res) => {
  // res.setHeader('Cache-Control', 'public, max-age=86400')
  res.statusCode = 400
  // res.setHeader('Content-Range', 'bytes 5001-10000/10000')

  res.end('hello world');
  // res.end();
});

server.listen(3333);