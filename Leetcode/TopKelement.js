const topKFrequent = (nums, k) => {
  const map = {};
  const result = [];
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  for (let num of nums) {
    map[num] = ~~map[num] + 1;
  }
  console.log(map, "map");

  for (let num in map) {
    bucket[map[num]].push(parseInt(num));
  }
  console.log(bucket, "bucket");

  for (let i = nums.length; i >= 0 && k > 0; k--) {
    while (bucket[i].length === 0) i--;
    result.push(bucket[i].shift());
  }

  return result;
};

console.log(ans, "ans");
