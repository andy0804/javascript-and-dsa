/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, searchFor) {
  // sort the array
  nums.sort();
  let triplets = [];
  // loop though the array

  for (let i = 0; i < nums.length; i++) {
    // pointer from left side
    let j = i + 1;
    // pointer from right side
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      // duplicates from the right side

      if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
        k++;
        continue;
      }

      if (nums[i] + nums[j] + nums[k] > searchFor) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < searchFor) {
        j++;
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
      }
    }
  }
  return triplets;
};

const op = threeSum([-1, 0, 1, 2, -1, -4], -2);
console.log("op", op);
