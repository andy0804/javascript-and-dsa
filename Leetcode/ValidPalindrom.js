/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let palindromStr = "";
  s = s.split("");
  for (let char of s) {
    if (char != "" && /^[A-Za-z0-9]+$/.test(char)) {
      palindromStr += char.toLowerCase();
    }
  }

  let r = "";
  for (let i = palindromStr.length - 1; i >= 0; i--) {
    r += palindromStr[i].toLowerCase();
  }
  console.log("p", palindromStr);

  console.log("r", r);
  if (r === palindromStr) return true;
  else return false;
};

const ans = isPalindrome("A man, a plan, a canal: Panama");
console.log(ans, "ans");
