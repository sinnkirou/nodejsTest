var fs= require('fs');
var buf=new Buffer(1024);

console.log('prepare open the file');
fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.error(err.stack);
  }
  console.log('file opened succeessful');
  console.log('prepare read file!');
  fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
      console.error(err.stack);
    }

    if(bytes>0){
      console.log(buf.slice(0,bytes).toString());
    }

    fs.close(fd,function(err){
      if(err){
        console.error(err.stack);
      }
      console.log('file closed successful');
    });
  });
});
