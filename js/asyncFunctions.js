console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);
new Promise(((resolve) => {
  resolve();
  console.log(3);
})).then(() => {
  console.log(4);
});
console.log(5);
