var fs=require('fs');
var buf=new Buffer(1024);

console.log('prepare open file');
fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.error(err);
  }
  console.log('file opened successful');
  console.log('cut the content from 10th records');
  
  fs.ftruncate(fd,10,function(err){
    if(err){
      console.log(err);
    }
    console.log('ftruncate successful');
    console.log('read same file');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
      if(err){
        console.log(err);
      }
     
      if(bytes>0){
        console.log(buf.slice(0,bytes).toString());
      }

      fs.close(fd,function(err){
        if(err){
          console.log(err);
        }
        console.log('file closed successful');
      });
    });
  });
});
