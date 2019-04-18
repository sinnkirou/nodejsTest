const fs = require('fs');

console.log('prepare delete dir /tmp/test');
fs.rmdir('/tmp/test', (err) => {
  if (err) {
    return console.error(err.stack);
  }
  console.log('view /tmp directory');

  fs.readdir('/tmp/', (error, files) => {
    if (error) {
      return console.error(error.stack);
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
});
