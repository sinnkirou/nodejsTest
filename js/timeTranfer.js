(function (pro) {
  const obj = pro;
  obj.formateTime = function (sTemplate) {
    let template = sTemplate || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    const ary = this.match(/\d+/g);
    template = template.replace(/\{(\d+)\}/g, function (...args) {
      const n = args[1];
      let val = ary[n] || '0';
      if (val < 10) { val = `0${val}`; }
      return val;
    });
    return template;
  };
}(String.prototype));

const a = '2019-4-29 8:12:13';
console.log(a.formateTime('{3}时{4}分{5}秒,{0}年{1}月{2}日'));
