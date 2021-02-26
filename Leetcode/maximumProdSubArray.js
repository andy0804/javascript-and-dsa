/**
 * Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // given the new number, the new maximun can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest
    curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

    curMin = Math.min(nums[i] * prevMax, nums[i], nums[i] * prevMin);

    // updating the prevMax & prevMin, these two may swap locations
    console.log("current max: " + curMax);
    console.log("current min: " + curMin);

    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(curMax, result);
  }
  return result;
};

const max = maxProduct([-2, 0, -1]);
console.log("max", max);
