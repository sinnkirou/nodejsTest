const express = require('express');

const app = express();
const bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index_post.htm', (req, res) => {
  // eslint-disable-next-line no-useless-concat
  res.sendFile(`${__dirname}/` + 'index_post.htm');
});

app.post('/process_post', urlencodedParser, (req, res) => {
  // 输出 JSON 格式
  const response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
