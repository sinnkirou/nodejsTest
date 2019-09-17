const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const _ = require('lodash');

const hashID = new Array();

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

io.on('connection', function (socket) {
  io.emit('message', {
    value: 'welcome',
  });

  socket.emit('message', {
    value: 'hello',
    type: 'text',
  });
  socket.emit('message', {
    value: 'http://192.168.198.58:3000/logo.png',
    type: 'image',
  });
  socket.emit('message', {
    value: 'http://192.168.198.58:3000/myRecording20190911185047.wav',
    type: 'audio',
  });
  socket.on('message', function (data) {
    console.log(data);
    socket.emit('message', data);
  });

  socket.on('setID', function (id) {
    hashID[id] = socket.id;
    console.log(hashID);
  });

  socket.on('disconnect', function () {
    const id = hashID.indexOf(socket.id);
    hashID[id] = null;
    console.log(`user ${id} disconnected`);
  });

  socket.on('pMessage', function (toId, data, errorCallBack) {
    const fromId = hashID.indexOf(socket.id);
    console.log(
      'froward a private message from',
      fromId,
      ' to ',
      toId,
      ' saying ',
      data.value,
    );
    const socketID = hashID[toId];
    if (socketID) {
      const toSocket = _.find(io.sockets.sockets, item => item.id === socketID);
      if (toSocket) {
        toSocket.emit('message', data);
      } else {
        console.log('offline message should send');
      }
    } else if (errorCallBack) errorCallBack();
  });
});
