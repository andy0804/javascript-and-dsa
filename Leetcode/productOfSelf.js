/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = productSoFar;
    productSoFar *= nums[i];
  }
  console.log("result in first pass: ", result);
  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= productSoFar;
    productSoFar *= nums[j];
  }
  console.log("result in second pass: ", result);

  return result;
};

let ans = productExceptSelf([1, 2, 3, 4, 5]);

console.log("ans", ans);
