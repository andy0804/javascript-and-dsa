/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (s) {
  let map = {};
  console.log("hey");
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = ~~map[s[i]] + 1;
  }
  console.log(map, "map");

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == 1) return s[i];
  }
};

singleNumber([4, 1, 2, 1, 2]);
