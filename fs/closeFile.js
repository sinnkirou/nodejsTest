const fs = require('fs');

const buf = Buffer.alloc(1024);

console.log('prepare open the file');
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err.stack);
  }
  console.log('file opened succeessful');
  console.log('prepare read file!');
  fs.read(fd, buf, 0, buf.length, 0, (err1, bytes) => {
    if (err1) {
      console.error(err1.stack);
    }

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }

    fs.close(fd, (err2) => {
      if (err2) {
        console.error(err2.stack);
      }
      console.log('file closed successful');
    });
  });
});
