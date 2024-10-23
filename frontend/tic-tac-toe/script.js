const boxes = document.querySelectorAll(".box");

let currentPlayer = "x";

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

[...boxes].forEach((box, i) => {
  box.addEventListener("click", () => {
    handleBoxClick(box, i);
  });
});

const handleBoxClick = (box, index) => {
  const row = box.dataset.row;
  const col = box.dataset.col;
  const boxValue = board[row][col];

  if (boxValue) {
    return;
  }

  board[row][col] = currentPlayer;
  box.textContent = currentPlayer;
  box.classList.add(`${currentPlayer}`);

  endTurn();
};

function endTurn() {
  const isWin = checkWin();
  const isDraw = checkDraw();

  if (isWin) {
    console.log(`${currentPlayer} wins`);
  } else if (isDraw) {
    console.log("draw");
  } else {
    switchPlayer();
  }
}

function checkWin() {
  return checkRows() || checkCols() || checkDiagonals();
}

function checkRows() {
  return board.some((row) => row.every((cell) => cell === currentPlayer));
}

function checkCols() {
  return board.some((row, i) => {
    return row.every((cell, j) => {
      return board[j][i] === currentPlayer;
    });
  });
}

function checkDiagonals() {
  const diagonal1 = board.every((row, i) => row[i] === currentPlayer);
  const diagonal2 = board.every((row, i) => row[2 - i] === currentPlayer);

  return diagonal1 || diagonal2;
}

function checkDraw() {
  return board.every((row) => row.every((cell) => cell));
}

function switchPlayer() {
  currentPlayer = currentPlayer === "x" ? "o" : "x";
}
