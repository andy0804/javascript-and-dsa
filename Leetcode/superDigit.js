/**
 * @param {number} num
 * @return {number}
 * Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
 */
var addDigits = function (num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(sum);
  if (sum > 9) return addDigits(sum);
  else return sum;
};

const ans = addDigits(38);
console.log(ans, "ans");
