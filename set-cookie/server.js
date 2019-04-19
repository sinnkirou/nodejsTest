const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('request come', request.headers.host);

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf-8');
    response.end(html);
  }

  if (request.url === '/data') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123;max-age=2;', 'name=peter;HttpOnly;domain=test.com'],
    });
    response.end('success');
  }
}).listen(3000, () => {
  console.log('server stared on 3000');
});
