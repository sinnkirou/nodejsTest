const buf = Buffer.alloc(256);
const len = buf.write('www.runoob.com');

console.log(`length of the writter records: ${len}`);
