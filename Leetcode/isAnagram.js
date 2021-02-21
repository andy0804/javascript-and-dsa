var isAnagram = function (s, t) {
  //return s.split('').sort().join("") === t.split('').sort().join("")
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = ~~counts[c] + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;
};
