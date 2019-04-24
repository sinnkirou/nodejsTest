// 对象中的this
console.log('对象中的this');
function objt() {
  // 1
  let o = {
    prop: 37,
    f() {
      return this.prop;
    },
  };
  console.log(o.f()); // 37
  const a = o.f;
  console.log(a()); // undefined

  o = { prop: 37 };

  function independent() {
    return this.prop;
  }

  o.f = independent;

  console.log(o.f()); // logs 37

  // 2
  o.b = {
    g: independent,
    prop: 42,
  };
  console.log(o.b.g()); // logs 42
}
objt();
console.log('\n');

// 原型链中this
console.log('原型链中this');
function proto() {
  const o = {
    f() {
      return this.a + this.b;
    },
  };
  const p = Object.create(o);
  p.a = 1;
  p.b = 4;

  console.log(p.f()); // 5
}
proto();
console.log('\n');

// 构造函数中this
console.log('构造函数中this');
function construnctor() {
  function C() {
    this.a = 37;
  }

  const o = new C();
  console.log(o.a); // logs 37

  function C2() {
    this.a = 37;
    return { a: 38 };
  }

  const b = new C2();
  console.log(b.a); // logs 38
}
construnctor();
console.log('\n');

// callAndApply中this
console.log('callAndApply中this');
function callAndApply() {
  const o = { a: 1, b: 3 };
  function tt() {
    console.log(this);
  }
  tt.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
  tt.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

  tt.call(5); // Number {[[PrimitiveValue]]: 5}
  tt.call('asd'); // String {0: "a", 1: "s", 2: "d", length: 3, [[PrimitiveValue]]: "asd"}
}
callAndApply();
console.log('\n');

// bind中this
console.log('bind中this');
function bind() {
  function f() {
    return this;
  }

  const g = f.bind({ a: 'azerty' });
  console.log(g()); // azerty

  const o = { a: 37, f, g };
  console.log(o.f()); // 37
  console.log(o.g()); // azerty
}
bind();
console.log('\n');

// arrowFunc中this
// 由于箭头函数不绑定this， 它会捕获其所在（即定义的位置）上下文的this值， 作为自己的this值，
console.log('arrowFunc中this');
function arrowFunc() {
  function doCallbakc(cb) {
    cb();
  }

  function Person() {
    this.age = 11;
    doCallbakc(() => {
      // 回调里面的 `this` 变量就指向了期望的那个对象了
      console.log(this.age);
      this.age += 1;
    });
    doCallbakc(function () {
      // 回调里面的 `this` 变量就指向了期望的那个对象了
      console.log(this.age);
      this.age += 1;
    });
  }

  // eslint-disable-next-line no-unused-vars
  const p = new Person();
}
arrowFunc();
console.log('\n');

// arrowMethod中this
console.log('arrowMethod中this');
function arrowMethod() {
  const obj = {
    i: 10,
    b: () => console.log(this.i),
    c() {
      console.log(this.i);
    },
  };
  obj.b(); // undefined
  obj.c(); // 10
}
arrowMethod();
