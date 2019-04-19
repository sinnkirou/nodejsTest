const buffer1 = Buffer.from('ABC');
const buffer2 = Buffer.from('ABCD');
const result = buffer1.compare(buffer2);

if (result < 0) {
  console.log(`${buffer1} is before ${buffer2}`);
} else if (result === 0) {
  console.log(`${buffer1} is same with ${buffer2}`);
} else {
  console.log(`${buffer1} is after ${buffer2}`);
}
