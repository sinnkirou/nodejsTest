function normalWay() {
  function formateTime(sContext, sTemplate) {
    const context = sContext;
    const ary = context.split(/(?:-| |:)/g);
    let template = sTemplate || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    ary.forEach((item, index) => {
      let val = item;
      if (val < 10 && !val.toString().substring(0, 1).includes('0')) {
        val = `0${val}`;
      }
      template = template.replace(`{${index}}`, val);
    });
    return template;
  }
  const context = '2019-04-29 8:12:13';
  console.log(formateTime(context, '{3}时{4}分{5}秒,{0}年{1}月{2}日'));
}
normalWay();

function replaceFucWithPrototype() {
  (function (pro) {
    const prototype = pro;
    prototype.formateTime = function (sTemplate) {
      let template = sTemplate || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
      const numberInContext = this.match(/\d+/g);
      template = template.replace(/\{(\d+)\}/g, function (...args) {
        const placeholder = args[1];
        let val = numberInContext[placeholder] || '0';
        if (val < 10 && !val.toString().substring(0, 1).includes('0')) { val = `0${val}`; }
        return val;
      });
      return template;
    };
  }(String.prototype));

  const context = '2019-04-29 8:12:13';
  console.log(context.formateTime('{3}时{4}分{5}秒,{0}年{1}月{2}日'));
}
replaceFucWithPrototype();
