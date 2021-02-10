/**
 * Given an array of integers, and a number ‘sum’, print all pairs in the array whose sum is equal to ‘sum’.

Examples :
Input  :  arr[] = {1, 5, 7, -1, 5}, 
          sum = 6
Output : (1, 5) (7, -1) (1, 5)

Input  :  arr[] = {2, 5, 17, -1}, 
          sum = 7
Output :  (2, 5)
 */

const getPairForSum = (nums, sum) => {
  /**
   * For each element "i"  in the outer loop
   * Loop from i+1 to the end of the array
   *  check if total equals sum
   *   if yes then push in list
   */
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] == sum) {
        list.push([nums[i], nums[j]]);
      }
    }
  }
  return list;
};

const getPairForSumV2 = (nums, sum) => {
  /**
   * For each element "i"  in the outer loop
   * Loop from i+1 to the end of the array
   *  check if total equals sum
   *   if yes then push in list
   */
  let map = {};
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    if (!map[sum - nums[i]]) {
      map[nums[i]] = sum - nums[i];
    } else {
      list.push([nums[i], sum - nums[i]]);
    }
  }
  console.log(map);
  return list;
};

const listResult = getPairForSumV2([2, 5, 17, -1], 7);
console.log("Answer", listResult);
