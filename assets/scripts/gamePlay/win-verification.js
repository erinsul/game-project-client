let xWon = function() {
  if((cells[0] === "x" && cells[1] ==="x" && cells[2]==="x") ||
    (cells[3] === "x" && cells[4]==="x" && cells[5] ==="x") ||
    (cells[6] === "x" && cells[7]==="x" && cells[8] ==="x") ||
    (cells[0] === "x" && cells[3]==="x" && cells[6] ==="x") ||
    (cells[1] === "x" && cells[4]==="x" && cells[7] ==="x") ||
    (cells[2] === "x" && cells[5]==="x" && cells[8] ==="x") ||
    (cells[0] === "x" && cells[4]==="x" && cells[8] ==="x") ||
    (cells[2] === "x" && cells[4]==="x" && cells[6] ==="x")) {
  console.log("x won!");
  //clear game board
  //make over = true
  }
};

let yWon = function() {
  if((cells[0] === "y" && cells[1] ==="y" && cells[2]==="y") ||
    (cells[3] === "y" && cells[4]==="y" && cells[5] ==="y") ||
    (cells[6] === "y" && cells[7]==="y" && cells[8] ==="y") ||
    (cells[0] === "y" && cells[3]==="y" && cells[6] ==="y") ||
    (cells[1] === "y" && cells[4]==="y" && cells[7] ==="y") ||
    (cells[2] === "y" && cells[5]==="y" && cells[8] ==="y") ||
    (cells[0] === "y" && cells[4]==="y" && cells[8] ==="y") ||
    (cells[2] === "y" && cells[4]==="y" && cells[6] ==="y")) {
  console.log("y won!");
  //clear game board
  //make over = true
  }
};



module.exports = {
  xWon,
  yWon,
};
