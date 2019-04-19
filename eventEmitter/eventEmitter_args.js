const events = require('events');

const emitter = new events.EventEmitter();
emitter.on('someEvent', (arg1, arg2) => {
  console.log('listener1', arg1, arg2);
});

emitter.on('someEvent', (arg1, arg2) => {
  console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent', 'arg1s', 'arg2s');
