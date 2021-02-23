var wordBreak = function (s, wordDict) {
  // create a hset set of word for fast query
  let set = new Set(wordDict);
  //query the answer of original string
  let map = new Map();

  return helper(s, map, set);
};

/**
 *
 * @param {*} s
 * @param {*} map
 * @param {*} set
 *
 * helper acts string , map and the set
 * 1. Check if MAP has the  substring
 * 2. If it does , then return the value present in map (like if leet is already found , it will have true stored in the map)
 * 3. If it does not , then check if the set has the word , if it does store it map and return true
 * 4. If neither the set has it , we need to move on in the array
 */
function helper(s, map, set) {
  if (map.has(s)) {
    return map.get(s);
  }
  //whole string is in dict, save in map and return
  console.log(`Is ${s}  present in set ${set}`);

  if (set.has(s)) {
    console.log(`${s} is present in set ${set}`);
    map.set(s, true);
    return true;
  }

  // try every break point
  // try if l is
  for (let i = 1; i < s.length; i++) {
    let left = s.substring(0, i);
    let right = s.substring(i);
    if (helper(left, map, set) && set.has(right)) {
      map.set(s, true);
      return true;
    }
  }
  map.set(s, false);
  return false;
}

let s = "leetcode",
  wordDict = ["leet", "code"];

const ans = wordBreak(s, wordDict);
console.log(ans, ans);
