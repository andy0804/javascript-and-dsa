let numList = [1, [2, [3], 4], [5]];
let flattendedArray = [];
function flatten(param) {
  for (let arr of param) {
    if (arr.length > 0) {
      flatten(arr);
    } else {
      flattendedArray.push(arr);
    }
  }
  return flattendedArray;
}

const array1 = flatten(numList);
console.log("flat", array1);
