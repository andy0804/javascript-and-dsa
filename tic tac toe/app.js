//  fetch the main container that has all 9 cells
const mainContainer = Array.from(document.querySelector("#mainBox").children);
const n = 3;
// some css that will display message when the user wins or loses or if there is a draw
const winningMessage = document.querySelector(".winning-message");
// css code that would be called to restart game
winningMessage.addEventListener("click", startGame);
let boardArray;
let rowSum;
let colSum;
let diagSum;
let revdiagSum;
let currentPlayer;
let xPlays;
let turns = 0;
startGame();
function startGame() {
  boardArray = new Array(3).fill(0).map(() => new Array(3).fill(0));
  rowSum = new Array(3).fill(0);
  colSum = new Array(3).fill(0);
  diagSum = 0;
  revdiagSum = 0;
  currentPlayer = 0; // X is currentPlayer
  xPlays = true; //
  turns = 0;
  winningMessage.style.display = "none";
  // now when I intialize I remove existing click listeners and then attach click listenrs such
  // that they are called once
  // we want to clear the cells if user restarts
  mainContainer.forEach((i) => {
    i.innerText = "";
    i.removeEventListener("click", handleBoxClick);
    i.addEventListener("click", handleBoxClick, { once: true });
  });
}

function handleBoxClick(e) {
  const parseRowsColumns = e.target.id.split("_");
  const row = parseRowsColumns[1];
  const column = parseRowsColumns[2];

  setValue(e);
  const result = handleBoard(+xPlays, row, column);

  if (result === -1 || result === 1) {
    handleWhenUserWins(result);
  }

  if (turns == n * n) {
    handleWhenItsaDraw();
  }
}
function handleBoard(player, row, col) {
  player = player === 0 ? -1 : 1;
  boardArray[row][col] = player;
  rowSum[row] += player;
  colSum[col] += player;

  if (
    Math.abs(rowSum[row]) == Math.abs(n) ||
    Math.abs(colSum[col]) == Math.abs(n) ||
    Math.abs(diagSum) === Math.abs(n) ||
    Math.abs(revdiagSum) === Math.abs(n)
  ) {
    return player;
  }

  // [0,0],[1,1],[2,2]
  if (+row === +col) {
    diagSum += player;
  }
  // [0,2],
  if (+row == +(n - col - 1)) {
    revdiagSum += player;
  }
  if (
    Math.abs(rowSum[row]) == Math.abs(n) ||
    Math.abs(colSum[col]) == Math.abs(n) ||
    Math.abs(diagSum) === Math.abs(n) ||
    Math.abs(revdiagSum) === Math.abs(n)
  ) {
    return player;
  }
  return 0;
}
function handleWhenUserWins(PLAYER) {
  const gameWinner = PLAYER === -1 ? "X" : "O";
  document.querySelector(".winning-message").style.display = "flex";
  document.querySelector(".winning-message").innerText =
    " The winner is " + gameWinner;
}

function handleWhenItsaDraw() {
  document.querySelector(".winning-message").style.display = "flex";
  document.querySelector(".winning-message").innerText = "Draw";
}
function setValue(e) {
  if (xPlays) {
    e.target.innerText = "X";
  } else {
    e.target.innerText = "O";
  }
  xPlays = !xPlays;
  turns++;
}
