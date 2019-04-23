/* eslint-disable no-func-assign */
function foo() {
  return this.base;
}
foo = foo.bind({ base: 1 });
foo = foo.bind({ base: 2 });

console.log(foo());

// Function.prototype.bind = function (scope) {
//   var fn = this;//this是调用bind方法的对象（别的方法对象）
//   return function () {
//       return fn.apply(scope);//把fn环境中的this替换为scope
//   };
// }

// function mockBind(foop, scope) {
//   const fn = foop;// this是调用bind方法的对象（别的方法对象）
//   return function () {
//     return fn.apply(scope);// 把fn环境中的this替换为scope
//   };
// }

// foo = mockBind(foo, { base: 1 });
// foo = mockBind(foo, { base: 2 });
// console.log(foo());
