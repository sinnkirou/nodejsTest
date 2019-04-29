(function (pro) {
  const prototype = pro;
  prototype.extraParams = function () {
    const regex = /[?|&]\w+=?\w*/g;
    const valueMap = {};
    this.replace(regex, function (...args) {
      const pair = args[0].toString().split('=');
      const key = pair[0].substring(1);
      valueMap[key] = pair[1] ? pair[1] : null;
    });
    return valueMap;
  };
}(String.prototype));

const urlString = 'http://www.baidu.com/101/?name=simith&sex=&age=16&grade#art';
const params = urlString.extraParams();
console.log(params);
