const express = require('express');

const app = express();
const server = require('http').Server(app);
const axios = require('axios');

server.listen(3000, () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('应用实例，访问地址为http://%s:%s', host, port);
});
// WARNING: app.listen(80) will NOT work here!

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const appId = '6179';
const appSecret = 'qIlnV1Lm4aiv00rlWww5OAAhQpeAHQUf';

const crypto = require('crypto');

const md5 = crypto.createHash('md5');

let auth = md5.update(appSecret).digest('hex');
auth = `${appId}:${auth}`;
auth = Buffer.from(auth).toString('base64');
auth = `Basic ${auth}`;
const gbBaseUrl = 'https://api.gobelieve.io';

app.get('/authToken/:userName/:uid', (req, res) => {
  const { userName, uid } = req.params;
  console.log(req.params);
  axios({
    method: 'post',
    url: 'auth/grant',
    baseURL: gbBaseUrl,
    data: {
      user_name: userName,
      uid: parseInt(uid, 0),
    },
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then((res2) => {
      // console.log(res2.data);
      res.json(res2.data);
    })
    .catch((e) => {
      console.error(res, e);
    });
});

app.get('/messages/peers/:sender/:receiver/:content', (req, res) => {
  const { sender, receiver, content } = req.params;
  axios({
    method: 'post',
    url: '/messages/peers',
    baseURL: gbBaseUrl,
    data: {
      sender: parseInt(sender, 0),
      receiver: parseInt(receiver, 0),
      content,
    },
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then((res2) => {
      console.log(res2.data);
      res.json(res2.data);
    })
    .catch((e) => {
      console.error(res, e);
    });
});
