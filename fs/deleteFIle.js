const fs = require('fs');

console.log('prepare delete file');
fs.unlink('input.txt', (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('file deleted successful');
});
