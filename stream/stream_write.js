var fs =require("fs");
var data='hello world 1234567';

var writerStream=fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');

writerStream.end();


writerStream.on('finish',function(){
console.log('write finished');
});

writerStream.on('error',function(err){
console.log(err.stack);
});

console.log('program ended');
