/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      j++;
    }
    chars[index++] = chars[i];
    // get the count of characters
    if (j - i > 1) {
      const countArray = (j - i).toString().split("");
      countArray.forEach((el) => {
        chars[index++] = el;
      });
    }
    i = j;
  }
  console.log("array is " + chars);
  return index;
};

console.log(compress());
