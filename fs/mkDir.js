var fs=require('fs');

console.log('make directory /tmp/test/');
fs.mkdir('/tmp/test/',function(err){
  if(err){
    return console.error(err.stack);
  }
  console.log('directory made successful');
});
