// 引入 events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// var EventEmitter=require('events').EventEmitter;
// var eventEmitter=new EventEmitter();

// 创建事件处理程序
const connectHandler = function connected() {
  console.log('connect successful');
  // 触发 data_received 事件
  eventEmitter.emit('data_received');
};

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', () => {
  console.log('data received successful');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log('program ended');
