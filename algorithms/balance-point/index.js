/**
 * 
 *  Equilibrium index of an array is an index such that the sum of elements
 *  at lower indexes is equal to the sum of elements at higher indexes. 
    For example, in an array A = {-7, 1, 5, 2, -4, 3, 0}, 3 
    is an equilibrium index because (-7 + 1 + 5) = (-4 + 3 + 0).
 */

// Complexity : O(N^2)
const balancePointV1 = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let rightSum = 0;
    let leftSum = 0;
    for (let l = 0; l < i; l++) {
      leftSum = leftSum + arr[l];
    }
    console.log("LEFT SUM", leftSum);
    for (let r = i + 1; r < n; r++) {
      rightSum = rightSum + arr[r];
    }
    console.log("RIGHT SUM", rightSum);

    if (leftSum === rightSum) {
      return i;
    }
  }
};

const eq = balancePointV1([-7, 1, 5, 2, -4, 3, 0]);
console.log("EQ", eq);

const balancePointV2 = (arr) => {
  const n = arr.length;

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < n; i++) {
    rightSum = rightSum + arr[i];
  }

  for (let i = 0; i < n; i++) {
    rightSum = rightSum - arr[i];
    if (leftSum === rightSum) return i;
    leftSum = leftSum + arr[i];
  }
};
const eqv2 = balancePointV2([-7, 1, 5, 2, -4, 3, 0]);
console.log("EQ --V2", eqv2);
