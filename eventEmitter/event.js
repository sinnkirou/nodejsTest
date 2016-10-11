// 引入 events 模块
var events=require('events');
// 创建 eventEmitter 对象
var eventEmitter=new events.EventEmitter();

//var EventEmitter=require('events').EventEmitter;
//var eventEmitter=new EventEmitter();

// 创建事件处理程序
var connectHandler=function connected(){
  console.log('connect successful');
  // 触发 data_received 事件 
  eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection',connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function(){
console.log('data received successful');
})

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("program ended");
