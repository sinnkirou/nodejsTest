const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('homepage get req');
  res.send('Hello Get');
});

// post req
app.post('/', (req, res) => {
  console.log('homepage post req');
  res.send('Hello Post');
});

// /del_user page response
app.delete('/del_user', (req, res) => {
  console.log('/del_user response DELETE req');
  res.send('delete page');
});

// /list_user page GET req
app.get('/list_user', (req, res) => {
  console.log('.lsit_user GET req');
  res.send('user list page');
});

// abcd,abxcd,ab123cd, wait the response of GET req
app.get('/ab*cd', (req, res) => {
  console.log('/ab*cd GET req');
  res.send('match');
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为http://%s:%s', host, port);
});
