/* eslint-disable no-param-reassign */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-shadow */
var i = 1;
function fn(i) {
  return function (n) {
    console.log(n + (i += 1));
  };
}
var f = fn(2);
f(3); // 6
fn(5)(6); // 12
fn(7)(8); // 16
f(4); // 8
