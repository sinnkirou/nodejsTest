process.on('exit', (code) => {
  setTimeout(() => {
    console.log('the code will not be excuted');
  }, 0);
  console.log('exit code: ', code);
});

console.log('program ended');
