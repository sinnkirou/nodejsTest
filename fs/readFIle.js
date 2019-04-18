const fs = require('fs');

const buf = Buffer.alloc(1024);

console.log('prepare open the existed file!');
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err.stack);
  }
  console.log('file opened succeessful!');
  console.log('perpare read files: ');
  fs.read(fd, buf, 0, buf.length, 0, (error, bytes) => {
    if (error) {
      console.log(error.stack);
    }
    console.log(`${bytes} records are readed`);

    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
