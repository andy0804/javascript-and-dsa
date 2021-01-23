const mainContainer = Array.from(document.querySelector("#mainBox").children);
const winningMessage = document.querySelector(".winning-message");
let xPlays = true;
let count = 0;
function updateCounter() {
  count++;
}
mainContainer.forEach((i) => {
  i.addEventListener("click", handleBoxClick);
});

winningMessage.addEventListener("click", restartGame);

function restartGame(e) {
  winningMessage.style.display = "none";
  for (let key in XOLookup) {
    XOLookup[key] = "";
  }
  mainContainer.forEach((i) => {
    i.innerText = "";
  });
}

const XOLookup = {
  "012": "",

  "048": "",

  "036": "",

  147: "",

  258: "",

  345: "",

  678: "",

  246: "",
};

function handleBoxClick(e) {
  setValue(e);
  switchPlay();
  updateCounter();
  let winner = checkGameStatus();
  if (winner) {
    document.querySelector(".winning-message").style.display = "flex";
    document.querySelector(".winning-message").innerText =
      " The winner is " + winner[0];
  }

  if (count === 9) {
    document.querySelector(".winning-message").style.display = "flex";
    document.querySelector(".winning-message").innerText = "Draw";
  }
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
function updateLookup(e, pos) {
  for (let key in XOLookup) {
    if (String(key).indexOf(pos.toString()) !== -1) {
      XOLookup[key] = XOLookup[key] + e.target.innerText;
    }
  }
}
function switchPlay() {
  xPlays = !xPlays;
}

function getPosition(e) {
  const parent = Array.from(e.target.parentElement.children);
  const position = parent.indexOf(e.target);
  return position;
}
function checkGameStatus() {
  const checkValues = Object.values(XOLookup);
  let winner = null;
  checkValues.some((i) => {
    if (i === "XXX" || i == "OOO") {
      winner = i;
    }
  });
  return winner;
}
