/* eslint-disable no-underscore-dangle */
const count = 0;
function airthmetic() {
  let _count = 0;
  function go(para) {
    _count += para;
    return _count;
  }
  return go;
}

console.log('dd go>>>>>>>>>>>>>');
const add = airthmetic();

let counta = add(3);
let countb = add(2);
console.log(`couner of counta: ${counta}`);
console.log(`couner of countb: ${countb}`);

counta = add(4);
countb = add(3);
console.log(`couner of counta: ${counta}`);
console.log(`couner of countb: ${countb}`);

console.log('\n\n\n\n');
console.log('substract go>>>>>>>>>>>>>');
const substract = airthmetic();

let countc = substract(-3);
let countd = substract(-2);
console.log(`couner of countc: ${countc}`);
console.log(`couner of countd: ${countd}`);

countc = substract(-4);
countd = substract(-3);
console.log(`couner of countc: ${countc}`);
console.log(`couner of countd: ${countd}`);

console.log(count);
