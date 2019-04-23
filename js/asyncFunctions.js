console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);
new Promise(resolve => {
  resolve();
  console.log(3);
}).then(() => {
  console.log(4);
});
console.log(5);

//then和settimeout执行顺序，即setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.then()在本轮“事件循环”结束时执行。
//因此then 函数先输出，settimeout后输出。

// 宏任务和微任务：
// 1）宏任务macrotask：
// （事件队列中的每一个事件都是一个macrotask）
// 优先级：主代码块 > setImmediate > MessageChannel > setTimeout / setInterval
// 比如：setImmediate指定的回调函数，总是排在setTimeout前面
// 2）微任务包括：
// 优先级：process.nextTick > Promise > MutationObserver

console.log("script start");

setTimeout(() => {
  console.log("timeout triggered");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Prmise1");
  })
  .then(() => {
    console.log("Promise2");
  });

console.log("script end");
