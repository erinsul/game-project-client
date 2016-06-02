'use strict';
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
      winState = true;
  }
  return winState
};

const tie = function(array) {
  if(!(array.includes(" "))){
    return true;
  }
};

module.exports = {
  win,
  tie,
};
