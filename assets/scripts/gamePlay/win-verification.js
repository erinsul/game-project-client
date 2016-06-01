'use strict';

<<<<<<< HEAD
const xWon = function() {
  if((cells[0] === "x" && cells[1] ==="x" && cells[2]==="x") ||
    (cells[3] === "x" && cells[4]==="x" && cells[5] ==="x") ||
    (cells[6] === "x" && cells[7]==="x" && cells[8] ==="x") ||
    (cells[0] === "x" && cells[3]==="x" && cells[6] ==="x") ||
    (cells[1] === "x" && cells[4]==="x" && cells[7] ==="x") ||
    (cells[2] === "x" && cells[5]==="x" && cells[8] ==="x") ||
    (cells[0] === "x" && cells[4]==="x" && cells[8] ==="x") ||
    (cells[2] === "x" && cells[4]==="x" && cells[6] ==="x")) {
  console.log("x won!");
=======
const win = function(array, marker) {
  let winState = false;
  if((array[0] === marker && array[1] === marker && array[2]=== marker) ||
    (array[3] === marker && array[4]===marker && array[5] ===marker) ||
    (array[6] === marker && array[7]===marker && array[8] ===marker) ||
    (array[0] === marker && array[3]===marker && array[6] ===marker) ||
    (array[1] === marker && array[4]===marker && array[7] ===marker) ||
    (array[2] === marker && array[5]===marker && array[8] ===marker) ||
    (array[0] === marker && array[4]===marker && array[8] ===marker) ||
    (array[2] === marker && array[4]===marker && array[6] ===marker)) {
      console.log("success!")
      winState = true;
>>>>>>> winner
  }
  return winState
};

module.exports = {
  win,
};
