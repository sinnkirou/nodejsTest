function foo() {
  return this;
}
var f1 = foo.call({ a: 1 });
var f2 = foo.apply({ a: 2 });
var f3 = foo.bind({ a: 1 });
console.log(f1); //{a:1}
console.log(f2); //{a:2}
console.log(f3); //function foo(){   return this; }
console.log(foo()); //window对象 console.log(f3()); //{a: 1}
