/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let arraySum = 0;
  if (nums.length > 0 && nums.length == 1) {
    return 1 - nums[0];
  }

  for (let arr of nums) {
    arraySum += arr;
  }

  return ((nums.length + 1) * nums.length) / 2 - arraySum;
};
