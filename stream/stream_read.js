const fs = require('fs');

let data = '';

const readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', (chunk) => {
  data += chunk;
});

readerStream.on('end', () => {
  console.log(data);
});

readerStream.on('error', (err) => {
  console.log(err.stack);
});


console.log('program ended');
