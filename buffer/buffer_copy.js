var buf1=new Buffer('ABC');
var buf2=new Buffer(3);
buf1.copy(buf2);
console.log('buf2 content: '+ buf2.toString());
