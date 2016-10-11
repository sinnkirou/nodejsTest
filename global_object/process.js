process.on('exit',function(code){
  setTimeout(function(){
    console.log('the code will not be excuted');
  },0);
  console.log('exit code: ', code);
});

console.log('program ended');
