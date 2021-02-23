const wordBreak = (s, dict) => {
  let set = new Set(dict);
  let map = new Map();
  return helper(s, set, map);
};

function helper(s, set, map) {
  // check if the strig is there in map
  if (map.has(s)) return map.get(s);

  // check if the string is there in array

  if (set.has(s)) {
    map.set(s, true);
    return true;
  }

  for (let i = 1; i < s.length; i++) {
    const left = s.substring(0, i);
    const right = s.substring(i);

    if (helper(left, set, map) && set.has(right) !== -1) {
      map.set(s, true);
      return true;
    }
  }
  maps.set(s, false);
  return false;
}

let s = "leetcode",
  wordDict = ["leet", "code"];

const ans = wordBreak(s, wordDict);
console.log(ans, ans);
