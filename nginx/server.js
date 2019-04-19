const http = require('http');
const fs = require('fs');

const wait = seconds => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, seconds * 1000);
});

http.createServer((request, response) => {
  console.log('request come', request.headers.host);

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf-8');
    response.writeHead(200, {
      'Content-Type': 'text/html',
    });
    response.end(html);
  }

  if (request.url === '/data') {
    response.writeHead(200, {
      'Cache-Control': 'max-age=2, s-maxage=20',
    });
    wait(2).then(() => response.end('success'));
  }
}).listen(3000, () => {
  console.log('server started...');
});
