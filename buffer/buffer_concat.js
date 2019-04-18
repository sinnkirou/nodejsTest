const buf1 = Buffer.from('菜鸟教程');
const buf2 = Buffer.from('www.runoob.com');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(`the content of buf3: ${buf3.toString()}`);
