function outputLongestSubstring(context) {
  const substringArray = [];
  let p = 0;
  for (let i = 0; i < context.length; i += 1) {
    substringArray[p] = substringArray[p] || '';
    if (substringArray[p].indexOf(context[i]) >= 0) {
      p += 1;
    }
    substringArray[p] = substringArray[p] || '';
    substringArray[p] += `${context[i]}`;
  }

  substringArray.sort((x, y) => x < y);
  console.log(substringArray[0].length);
}

outputLongestSubstring('abcabcde');
outputLongestSubstring('aaaaaaaaa');
outputLongestSubstring('abca');


const lengthOfLongestSubstring = function (s) {
  let max = 0;
  let start = 0;
  for (let end = 1; end <= s.length; end += 1) {
    const sub = s.substring(start, end);
    const isub = sub.indexOf(sub[sub.length - 1]) !== sub.length - 1;
    if (isub) {
      start += (sub.indexOf(sub[sub.length - 1]) + 1);
    }
    max = Math.max(end - start, max);
  }
  console.log(max);
};

lengthOfLongestSubstring('abcabcde');
lengthOfLongestSubstring('aaaaaaaaa');
lengthOfLongestSubstring('abca');
