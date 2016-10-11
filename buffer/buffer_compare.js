var buffer1=new Buffer('ABC');
var buffer2=new Buffer('ABCD');
var result =buffer1.compare(buffer2);

if(result<0){
console.log(buffer1+' is before '+buffer2);
}else if(result==0){
console.log(buffer1 + ' is same with '+ buffer2);
}else{
console.log(buffer1+' is after '+buffer2);
}
