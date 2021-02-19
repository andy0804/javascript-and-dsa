//abcabcbb
const lengthOfLongestSubstring = (s) => {
  // declaring the variables

  let set = {};
  let longest = 0;
  let i = 0;
  let j = 0;

  while (i < s.length && j < s.length) {
    if (!set[s[j]]) {
      set[s[j]] = s[j];
      longest = Math.max(longest, j - i + 1);
      j++;
    } else {
      delete set[s[j]];
      i++;
    }
  }
  return longest;
};

const len = lengthOfLongestSubstring("abcabcbb");
console.log("object", len);
