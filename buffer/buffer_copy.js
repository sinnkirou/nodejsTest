const buf1 = Buffer.from('ABC');
const buf2 = Buffer.alloc(3);
buf1.copy(buf2);
console.log(`buf2 content: ${buf2.toString()}`);
