/* eslint-disable no-func-assign */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
function createXHR() {
  let xhr = null;
  let flag = false;
  const ary = [
    function () {
      return new XMLHttpRequest();
    },
    function () {
      return new ActiveXObject('Microsoft.XMLHTTP');
    },
    function () {
      return new ActiveXObject('Msxml2.XMLHTTP');
    },
    function () {
      return new ActiveXObject('Msxml3.XMLHTTP');
    },
  ];
  for (let i = 0; i < ary.length; i += 1) {
    const curFn = ary[i];
    try {
      xhr = curFn();
      createXHR = curFn;
      flag = true;
      break;
    } catch (e) {
      console.log(e.message);
    }
  }
  if (!flag) {
    throw new Error('your browser not support AJAX!');
  }
  return xhr;
}
createXHR();
