var fs=require("fs");

console.log('prepare write');
fs.writeFile('input.txt','writen content is here!!!',function(err){
  if(err){
    return console.error(err.stack);
  }
  console.log('write successful');
  console.log('------------------------------');
  console.log('read records');
  fs.readFile('input.txt',function(err,data){
     console.log('asynchronous reader data: '+ data.toString());
  });
});
