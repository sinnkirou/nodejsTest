const fs = require('fs');

console.log('view /tmp directory');
fs.readdir('/tmp/', (err, files) => {
  if (err) {
    return console.error(err.stack);
  }
  files.forEach((file) => {
    console.log(file);
  });
});
