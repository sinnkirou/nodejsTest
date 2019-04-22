/* eslint-disable no-unused-vars */
function fun(n, o) {
  console.log(o);
  return {
    fun(m) {
      return fun(m, n);
    },
  };
}

const a = fun(0); a.fun(1); a.fun(2); a.fun(3);
console.log('>>>>>>>>>>>');
const b = fun(0).fun(1).fun(2).fun(3);
console.log('>>>>>>>>>>>');
const c = fun(0).fun(1); c.fun(2); c.fun(3);
console.log('>>>>>>>>>>>');
const d = a.fun(1);
const e = d.fun(2);
const f = e.fun(3);
