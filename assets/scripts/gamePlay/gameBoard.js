'use strict';
const app = require('../app.js');
const winVerify = require('./win-verification.js');
let cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
const setGameObjectIndex = function(object, id) {
switch(id) {
  case "zero" :
    object.game.cell.index = 0;
    break;
  case "one" :
    object.game.cell.index = 1;
    break;
  case "two" :
    object.game.cell.index = 2;
    break;
  case "three" :
    object.game.cell.index = 3;
    break;
  case "four" :
    object.game.cell.index = 4;
    break;
  case "five" :
    object.game.cell.index = 5;
    break;
  case "six" :
    object.game.cell.index = 6;
    break;
  case "seven" :
    object.game.cell.index = 7;
    break;
  case "eight" :
    object.game.cell.index = 8;
    break;
}
};

//data that needs to be sent with patch req
const setGameObject = (marker, id) =>{
  let gameObject = {
    "game": {
      "cell": {
    },
      "over": false
    }
    };
    //sets cell value on game object
    gameObject.game.cell.value = marker;
    //sets index on game object
    setGameObjectIndex(gameObject, id);
    //sets cells array used to test winner
    cells[gameObject.game.cell.index] = marker;
        //if someone won
        if(winVerify.win(cells, marker)){
          //sets the game over to true
          gameObject.game.over = true;
          $('#current-message').text("Game Over! " + marker + " won!");
        } else if (winVerify.tie(cells)) {
          gameObject.game.over = true;
          $('#current-message').text("Game Over! It's a tie!")
        }
        return gameObject;
};

const onClearBoard = () =>{
  event.preventDefault();
  cells = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  $('.container').children().children('section').text("");
  $('#clearBoard').hide();
  $('#newGame').show();
  $('#current-message').text("Press 'new game' to play again!");
};

const gameOver = () => {
      app.currentMove = "";
      app.game = "";
      $('#newGame').hide();
      $('#clearBoard').show();
};

module.exports = {
  setGameObject,
  onClearBoard,
  gameOver,
};
