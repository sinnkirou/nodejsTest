const buf = Buffer.from('www.runoob.com');
const json = buf.toJSON(buf);

console.log(json);
