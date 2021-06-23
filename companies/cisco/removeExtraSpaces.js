/**
 * Remove multiple spaces and tabs
 * from the string and count the number of them
 * Input: 
str = "   Hello Geeks . Welcome   to  GeeksforGeeks   .    ";
Output: 
"Hello Geeks. Welcome to GeeksforGeeks."
 */

const removeSpaces = (str) => {
  let len = str.split("").length;
  str = str.split("");
  let curr = 0;
  let next = 0;
  while (next < len) {
    while (str[next] === " ") {
      next++;
    }
    str[curr] = str[next];
    curr++;
    next++;
  }
  console.log(str.join("").slice(0, curr));
};
removeSpaces("Hello  this is ananth");
