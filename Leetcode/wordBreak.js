var wordBreak = function (s, wordDict) {
  // create a hset set of word for fast query
  let set = new Set(wordDict);
  //query the answer of original string
  let map = new Map();
  return helper(s, map, set);
};

function helper(s, map, set) {
  if (map.has(s)) {
    return map.get(s);
  }
  //whole string is in dict, save in map and return
  if (set.has(s)) {
    map.set(s, true);
    return true;
  }

  // try every break point
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
