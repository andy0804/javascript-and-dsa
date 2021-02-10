/**
 * Lets say you have two strings: 'the' and 
 * 'The cop has a nice little hat.' Write a function that will check each character
 *  from first string and count the same in the second string.
 *  Return the total count. For example, character 't' occurred 3 times (case sensitive), 
character 'h' occurred 3 times and character 'e' occurred 3 times in the second string. Total count = 9.  
 */

let strTest = "the";
let strToVerify = "The cop has a nice little hat.";

const getCharacterCount = (strTest, strToVerify) => {
  strTest = strTest.split("");
  strToVerify = strToVerify.split("");
  let map = {};

  for (let char of strTest) {
    for (let strChar of strToVerify) {
      if (char === strChar && map[char]) {
        map[char]++;
      } else if (char === strChar && !map[char]) {
        map[char] = 1;
      }
    }
  }
  console.log(map, "map");
  const sum = Object.values(map).reduce((a, b) => a + b, 0);
  return sum;
};

const total = getCharacterCount(strTest, strToVerify);
console.log("total", total);
