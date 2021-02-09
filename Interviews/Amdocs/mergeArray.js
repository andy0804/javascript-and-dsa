export function mergeArrays(x, y) {
  if (!x || !y) throw "array not defined";

  let mergedArray = [];
  // map to check for duplicates
  let map = {};

  x.forEach((i) => {
    manageDuplicates(map, mergedArray, i);
  });
  y.forEach((i) => {
    manageDuplicates(map, mergedArray, i);
  });

  mergedArray.sort((a, b) => (a.id > b.id ? 1 : -1));
  return mergedArray;
}

/**
 * function to check if value is already added in array
 */
const manageDuplicates = (map, mergedArray, i) => {
  if (!map[i.id]) {
    mergedArray.push(i);
    map[i.id] = i.id;
  }
};
