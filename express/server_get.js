const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/index_get.htm', (req, res) => {
  // eslint-disable-next-line no-useless-concat
  res.sendFile(`${__dirname}/` + 'index_get.htm');
});

app.get('/process_get', (req, res) => {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };

  console.log(response);
  res.end(JSON.stringify(response));
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('应用实例，访问地址为http://%s:%s', host, port);
});
