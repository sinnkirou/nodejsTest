const fs = require('fs');

const buf = Buffer.alloc(1024);

console.log('prepare open file');
fs.open('input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log('file opened successful');
  console.log('cut the content from 10th records');

  fs.ftruncate(fd, 10, (err1) => {
    if (err1) {
      console.log(err1);
    }
    console.log('ftruncate successful');
    console.log('read same file');
    fs.read(fd, buf, 0, buf.length, 0, (err2, bytes) => {
      if (err2) {
        console.log(err2);
      }

      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString());
      }

      fs.close(fd, (err3) => {
        if (err3) {
          console.log(err3);
        }
        console.log('file closed successful');
      });
    });
  });
});
