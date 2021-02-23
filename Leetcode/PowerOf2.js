/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 0) return false;
  if (n == 1) return true;
  else {
    return isPowerOfTwo(n / 2);
  }

  /**
   * 16/2 = 8
   *  8/2 = 4
   * 4/2 = 2
   * 2/2 = 1
   *  so eventually if a number has value 1 then we return true
   * if  value reaches 0 we return false
   */
};

let ans = isPowerOfTwo(64);
console.log("ans", ans);
