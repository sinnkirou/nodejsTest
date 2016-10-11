var fs=require('fs');

console.log('prepare delete file');
fs.unlink('input.txt',function(err){
  if(err){
    return console.error(err);
  }
  console.log('file deleted successful');
});
