function a(m) {
  function f() { return this.base; }
  return (f() + m);
}

const b = { base: 10 };
console.log(a.call(b, 1));
