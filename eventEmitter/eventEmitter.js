var EventEmitter =require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event', function(){
console.log('some event get ran');
})

setTimeout(function(){
event.emit('some_event');
},10000);
