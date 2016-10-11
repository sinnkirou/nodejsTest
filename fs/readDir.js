var fs=require('fs');

console.log('view /tmp directory');
fs.readdir('/tmp/',function(err,files){
  if(err){
    return console.error(err.stack);
  }
  files.forEach(function (file){
    console.log(file);
  })
})
