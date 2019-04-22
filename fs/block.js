const fs = require('fs');

const data = fs.readFileSync('input.txt', (err, content) => {
  if (err) return console.error(err.stack);
  console.log(`${content.toString()}>>>`);
});
console.log(`${data.toString()}<<<`);
console.log('end');
