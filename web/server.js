const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer((req, res) => {
  // 解析请求，包括文件名
  const { pathname } = url.parse(req.url);

  // 输出请求的文件名
  console.log(`Requese for ${pathname} received.`);

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err.stack);
      // HTTP 状态码: 404, NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // HTTP 状态码: 200，ok
      // Content Type: text/plain
      // 响应文件内容
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data.toString());
    }
    // 发送响应数据
    res.end();
  });
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
