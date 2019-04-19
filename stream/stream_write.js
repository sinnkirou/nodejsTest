const fs = require('fs');

const data = 'hello world 1234567';

const writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');

writerStream.end();


writerStream.on('finish', () => {
  console.log('write finished');
});

writerStream.on('error', (err) => {
  console.log(err.stack);
});

console.log('program ended');
