var fs=require('fs');
var buf=new Buffer(1024);

console.log('prepare open the existed file!');
fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.error(err.stack);
  }
  console.log('file opened succeessful!');
  console.log('perpare read files: ');
  fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
      console.log(err.stack);
    }
    console.log(bytes+' records are readed');

    if(bytes>0){
       console.log(buf.slice(0,bytes).toString());
    }
  });
});
