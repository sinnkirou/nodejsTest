const fs = require('fs');

console.log('prepare open');
fs.open('input.txt', 'r+', (err) => {
  if (err) {
    return console.error(err.stack);
  }
  console.log('opened successful');
});
