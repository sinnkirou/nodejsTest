function a(m) {
  function f() { return this.base; }
  return (f() + m);
}

function c(m) {
  function f() { return this.base; }
  return (f.bind(this)() + m);
}

const b = { base: 10 };
console.log(a.call(b, 1));
console.log(c.call(b, 1));
