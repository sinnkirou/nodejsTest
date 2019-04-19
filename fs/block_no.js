const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  if (err) return console.error(err.stack);
  console.log(data.toString());
});

console.log('end!');
