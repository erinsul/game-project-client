'use strict';
const winVerify = require('./win-verification.js');
const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');
let cells = ["", "", "", "", "", "", "", "", ""];

const onNewGame = function (event){
  event.preventDefault();
  api.createNewGame()
  .done(ui.success)
  .fail(ui.failure);
};

const move = function(){
  //data that needs to be sent with patch req
  let gameObject = {
    "game": {
      "cell": {
        "index": 0,
        "value": ""
    },
      "over": false
  }
};
<<<<<<< HEAD
  let cells = ["", "", "", "", "", "", "", "", ""]
=======
>>>>>>> winner
const setGameObjectIndex = function(id) {
switch(id) {
  case "zero" :
    gameObject.game.cell.index = 0;
    break;
  case "one" :
    gameObject.game.cell.index = 1;
    break;
  case "two" :
    gameObject.game.cell.index = 2;
    break;
  case "three" :
    gameObject.game.cell.index = 3;
    break;
  case "four" :
    gameObject.game.cell.index = 4;
    break;
  case "five" :
    gameObject.game.cell.index = 5;
    break;
  case "six" :
    gameObject.game.cell.index = 6;
    break;
  case "seven" :
    gameObject.game.cell.index = 7;
    break;
  case "eight" :
    gameObject.game.cell.index = 8;
    break;
}
};
//moving as x
  if(app.currentMove === "x"){
    //prevents moving if already occupied
      if($(this).text() === ""){
        //sets text on board
        $(this).text("X");
        //sets cell value on game object
        gameObject.game.cell.value = "x";
        //sets index on game object
        setGameObjectIndex(this.id);
<<<<<<< HEAD
        cells[gameObject.game.cell.index] = "x"
        if(winVerify.xWon){
          gameObject.game.over = true;
        }
        console.log(gameObject);
        api.updateGame(gameObject)
        .done(ui.updateSuccess)
        .fail(ui.failure);
=======
        //sets cells array used to test winner
        cells[gameObject.game.cell.index] = "x";
        //if someone won
        if(winVerify.win(cells, "x")){
          //sets the game over to true
          gameObject.game.over = true;
          console.log("x won!");
        }
        //sends fully updated game object
        api.updateGame(gameObject)
        .done(ui.updateSuccess)
        .fail(ui.failure);
        //if game over
        if(gameObject.game.over){
          //blocks another move
          app.currentMove = "";
        } else {
          //otherwise, switches to o
>>>>>>> winner
        app.currentMove = "o";
        }
    }
  } else if (app.currentMove === "o") {
    //prevents moving if already occupied
    if($(this).text() === ""){
      //sets text on board
      $(this).text("O");
      //sets game object cell value
      gameObject.game.cell.value = "o";
      //sets game object cell index
      setGameObjectIndex(this.id);
      //sets cells array
      cells[gameObject.game.cell.index] = "o";
      //if there is a winner
      if(winVerify.win(cells, "o")){
        //sets game object over to true
        gameObject.game.over = true;
      }
      //sends game object in patch
      api.updateGame(gameObject)
      .done(ui.updateSuccess)
      .fail(ui.failure);
      //if game over
      if(gameObject.game.over){
        //prevent another move
        app.currentMove = "";
      } else {
        //otherwise, switch to x turn
        app.currentMove = "x";
      }
  }
}
};

const gameHandlers = () => {
$('#newGame').on('click', onNewGame);
// $('#joinGame').on('click', onJoinGame);
$('#zero').on('click', move);
$('#one').on('click', move);
$('#two').on('click', move);
$('#three').on('click', move);
$('#four').on('click', move);
$('#five').on('click', move);
$('#six').on('click', move);
$('#seven').on('click', move);
$('#eight').on('click', move);
};

module.exports = {
  gameHandlers,
};
