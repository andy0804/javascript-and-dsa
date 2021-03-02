/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }
  if (sum == 1) return true;
  else if (sum !== 1 && sum < 10) return false;
  else return isHappy(sum);
};

const happy = isHappy(19);
console.log(happy, "Happy");
