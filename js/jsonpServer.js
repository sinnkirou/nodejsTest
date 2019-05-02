const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const urlObj = url.parse(req.url, true);
  const {
    pathname,
    query,
  } = urlObj;

  if (pathname === '/getSampleData') {
    const fnName = query.callback;
    res.writeHead(200, {
      'content-type': 'text/javascript;charset=utf-8;',
    });
    const data = JSON.stringify({
      data: 'success',
    });
    if (fnName) {
      res.end(`${fnName}(${data})`);
    } else {
      res.end(data);
    }
  } else {
    res.writeHead(404, {
      'content-type': 'text/html;charset=utf-8;',
    });
    res.end();
  }
}).listen(8080, () => {
  console.log('server started');
});
