/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  // convert dictionary to map
  const mapDictionary = {};
  for (let root of dictionary) {
    mapDictionary[root] = root;
  }
  const sentenceArray = sentence.split(" ");
  // convert the string to an array
  // for each element in the string , pass the current index to a function called mapCheck
  let elementIndex = 0;
  for (let element of sentenceArray) {
    for (let i = 0; i < element.length; i++) {
      if (mapDictionary[element.substring(0, i + 1)]) {
        sentenceArray[elementIndex] =
          mapDictionary[element.substring(0, i + 1)];
        break;
      }
    }
    elementIndex++;
  }
  // inside map check , we will examine each letter to see if it is present in the mapCheck
  // if we find a match ,then we update the whole word with the dictionary word
  // else if we continue
  return sentenceArray.join(" ");
};

//Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"

const ans = replaceWords(
  ["cat", "bat", "rat"],
  "the cattle was rattled by the battery"
);

const ans1 = replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs");
const ans2 = replaceWords(
  ["a", "aa", "aaa", "aaaa"],
  "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
);

console.log(ans, "ans");
console.log(ans1, "ans1");
console.log(ans2, "ans2");
