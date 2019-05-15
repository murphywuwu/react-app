const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers['if-modified-since']);

  if (req.headers['if-modified-since']) {
    // 检查文件版本
    res.statusCode = 304;
    res.end();
  }
  else {
    res.setHeader('Last-Modified', new Date().toString());
    res.end('hello world')
  }
});

server.listen(3333)