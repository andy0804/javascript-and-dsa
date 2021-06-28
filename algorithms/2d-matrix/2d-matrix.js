/**
 * Algorithm
 * 1.Create a 1D array
 * 2.For each value in the 1D array initialize an ARRAY
 * 3.Initialize the array
 * 4. Display the array
 */

const rows = new Array(2);

for (let i = 0; i < rows.length; i++) {
  rows[i] = new Array(2);
}

let h = 0;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    rows[i][j] = h++;
  }
}
console.log(rows);
