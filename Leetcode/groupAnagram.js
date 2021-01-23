/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs && strs.length === 0) return [[""]];

  if (strs && strs.length === 1) return [[strs[0]]];

  const myMap = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedVal = strs[i].split("").sort().join("");
    if (!myMap[sortedVal]) {
      myMap[sortedVal] = [strs[i]];
    } else {
      myMap[sortedVal].push(strs[i]);
    }
  }
  return Object.values(myMap);
};

const answer = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(answer);
