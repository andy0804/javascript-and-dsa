//  fetch the main container that has all 9 cells
const mainContainer = Array.from(document.querySelector("#mainBox").children);
// some css that will display message when the user wins or loses or if there is a draw
const winningMessage = document.querySelector(".winning-message");
// css code that would be called to restart game
winningMessage.addEventListener("click", startGame);
// we will iniatialize an empty obj here
let XOLookup = null;
startGame();
function startGame(e) {
  winningMessage.style.display = "none";
  // defining all the winning combinations
  XOLookup = {
    "012": "",

    "048": "",

    "036": "",

    147: "",

    258: "",

    345: "",

    678: "",

    246: "",
  };

  // now when I intialize I remove existing click listeners and then attach click listenrs such
  // that they are called once
  // we want to clear the cells if user restarts
  mainContainer.forEach((i) => {
    i.innerText = "";
    i.removeEventListener("click", handleBoxClick);
    i.addEventListener("click", handleBoxClick, { once: true });
  });
  // maintaining a visited array to see if all cells are visited
  visited = Array(9).fill(false);
  //decided who starts
  xPlays = true;
}

function handleBoxClick(e) {
  setValue(e);
  let winner = checkGameStatus();
  if (winner) {
    handleWhenUserWins();
  } else if (visited.every((i) => i)) {
    handeWhenItsaDraw();
  } else {
    switchPlay();
  }
}
function handleWhenUserWins() {
  const gameWinner = xPlays ? "X" : "O";
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
  const pos = getPosition(e);
  updateLookup(e, pos);
}

// we update the lookup table
function updateLookup(e, pos) {
  for (let key in XOLookup) {
    if (String(key).indexOf(pos.toString()) !== -1) {
      XOLookup[key] = XOLookup[key] + e.target.innerText;
    }
  }
}
// switches the player
function switchPlay() {
  xPlays = !xPlays;
}

// gets the position of the element which is clicked
function getPosition(e) {
  const parent = Array.from(e.target.parentElement.children);
  const position = parent.indexOf(e.target);
  visited[position] = true;
  return position;
}

// in my look up table , I will check and see if any one value is XXX or OOO that means we
// have a winning combination and we can end game
function checkGameStatus() {
  const checkValues = Object.values(XOLookup);
  return checkValues.some((i) => {
    if (i === "XXX" || i == "OOO") {
      return true;
    }
  });
}
