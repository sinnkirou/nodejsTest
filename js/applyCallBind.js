function foo() {
  return this;
}
const f1 = foo.call({ a: 1 });
const f2 = foo.apply({ a: 2 });
const f3 = foo.bind({ a: 1 });
console.log(f1); // {a:1}
console.log(f2); // {a:2}
console.log(f3); // function foo(){   return this; }
console.log(foo()); // window对象
console.log(f3()); // {a: 1}
const f4 = foo.bind(this);
console.log(f4);
console.log(f4());
