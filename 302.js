const http = require('http');

let serve = http.createServer((req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'http://127.0.0.1:5500/test2.html');
  res.end();
})

serve.listen(3333);