const { EventEmitter } = require('events');

const event = new EventEmitter();
event.on('some_event', () => {
  console.log('some event get ran');
});

setTimeout(() => {
  event.emit('some_event');
}, 10000);
