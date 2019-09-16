const express = require('express');

const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
