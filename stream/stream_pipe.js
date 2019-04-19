const fs = require('fs');

const readerStream = fs.createReadStream('input.txt');
const writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log('program ended');
