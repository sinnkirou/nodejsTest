/* eslint-disable no-func-assign */
function foo() {
  return this.base;
}
foo = foo.bind({ base: 1 });
foo = foo.bind({ base: 2 });

console.log(foo());
