/**
 * Let there be a string say “I AM A GEEK”.
 * So, the output should be “GEEK A AM I” .
 * This can done in many ways.
 * One of the solutions is given in Reverse words in a string .
 */

const reverseWords = (str) => {
  str = str.split(" ");
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  console.log(rev);
  return rev;
};

reverseWords("I am a Geek");
