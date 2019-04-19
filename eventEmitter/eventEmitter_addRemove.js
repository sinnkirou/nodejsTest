const events = require('events');

const eventEmitter = new events.EventEmitter();

const listener1 = function listener1() {
  console.log('listener1 run');
};

const listener2 = function listener2() {
  console.log('listener2 run');
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(`${eventListeners} listeners listen connect events`);

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener2);
console.log('listener2 will not listen');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(`${eventListeners} listeners listen connect events`);

console.log('program ended');
