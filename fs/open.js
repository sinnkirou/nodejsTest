var fs=require('fs');

console.log('prepare open');
fs.open('input.txt','r+',function(err,fd){
  if(err){
    return concole.error(err.stack);
  }
  console.log('opened successful')
})
