/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  // Looping through the rows
  for (let row = 0; row < grid.length; row++) {
    // loop through the columms
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] == "1") {
        count++;
        callDFS(row, column, grid);
      }
    }
  }
  return count;
};

function callDFS(row, column, grid) {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[row].length ||
    grid[row][column] == "0"
  )
    return;

  grid[row][column] = "0";

  callDFS(row + 1, column, grid); // move down
  callDFS(row - 1, column, grid); // move up
  callDFS(row, column + 1, grid); // move right
  callDFS(row, column - 1, grid); // move left
}
