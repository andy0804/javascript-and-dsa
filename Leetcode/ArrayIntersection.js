const arrayInt = (arr1, arr2) => {
  let intersectedArray = [];
  // first array pointer
  for (let i = 0; i < arr1.length; i++) {
    if (
      arr2.indexOf(arr1[i]) !== -1 &&
      intersectedArray.indexOf(arr1[i]) == -1
    ) {
      intersectedArray.push(arr1[i]);
    }
  }
  return intersectedArray;
};

const arrayInt1 = (arr1, arr2) => {
  let intersectedArray = [];
  let map = {};
  // first array pointer
  for (let val of arr1) {
    if (!map[val]) map[val] = val.toString();
  }
  console.log(map);
  for (let val2 of arr2) {
    if (map[val2]) {
      intersectedArray.push(val2);
    }
  }
  console.log(intersectedArray);
  return Array.from(...[new Set(intersectedArray)]);
};

let result = arrayInt1([8, 0, 3], [0, 0]);
console.log(result, "int");
