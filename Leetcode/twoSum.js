/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  /***
    1) CHECK IF NUMBER OR TARGET-NUMBER IS PRESENT IN MAP[CURENT_NUMBER] AND MAP[TARGER-NUM]
   2) IF NO THEN PUSH NUMBER AND INDEX  IN MAP
   3_ IF YES THEN RETURN CURRENT INDEX AND VALUE OF MAP[CURRENT_NUM]
   **/

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
  }
};
