/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // initialize dp Array to 1
  let dp = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 1; i < nums.length; i++)
    for (let j = 0; j < i; j++)
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }

  for (let i = 0; i < dp.length; i++) {
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return max;
};

console.log(lengthOfLIS([10, 22, 9, 33, 21, 50, 41, 60]));
