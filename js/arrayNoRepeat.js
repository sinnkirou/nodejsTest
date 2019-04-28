/* eslint-disable no-continue */
function doubleFor() {
  const ary = [2, 3, 4, 5, 2, 4, 8, 9, 2];

  for (let i = 0; i < ary.length; i += 1) {
    const item = ary[i];
    for (let k = i + 1; k < ary.length; k += 1) {
      if (item === ary[k]) {
        ary.splice(k, 1);
        k -= 1;// 防止数组塌陷
      }
    }
  }
  console.log(ary);
}
doubleFor();


function objectKeyValue() {
  const ary = [2, 3, 4, 5, 2, 4, 8, 9, 2];
  const obj = {};
  for (let i = 0; i < ary.length; i += 1) {
    const item = ary[i];
    if (typeof obj[item] !== 'undefined') {
      // ary.splice(i, 1);// splice的删除方式，索引会变化，重新计算的性能消耗很大
      // i -= 1;//防止数组塌陷
      ary[i] = ary[ary.length - 1];// 用最后一位替换当前位置
      ary.pop();// 删除最后一位
      i -= 1; // 重新比较替换后的当前位置
      continue;
    }
    obj[item] = item;
  }
  console.log(ary);
}
objectKeyValue();

// es6 new set
function bySet() {
  const ary = [2, 3, 4, 5, 2, 4, 8, 9, 2];
  const newAry = Array.from(new Set(ary));
  // Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
  // new Set一个新的Set对象。如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为null，则新的 Set为空。
  // from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
  console.log(newAry);
}
bySet();
