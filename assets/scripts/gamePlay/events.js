'use strict';
const winVerify = require('./win-verification.js');
const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');

const onNewGame = function (event){
  event.preventDefault();
  api.createNewGame()
  .done(ui.success)
  .fail(ui.failure);
};

const move = function(){
  let gameObject = {
    "game": {
      "cell": {
        "index": 0,
        "value": ""
    },
      "over": false
  }
};
  let cells = ["", "", "", "", "", "", "", "", ""]
const setGameObjectIndex = function(id) {
switch(id) {
  case "zero" :
    console.log("zero!");
    gameObject.game.cell.index = 0;
    break;
  case "one" :
    console.log("one!");
    gameObject.game.cell.index = 1;
    break;
  case "two" :
    console.log("two!");
    gameObject.game.cell.index = 2;
    break;
  case "three" :
    console.log("three!");
    gameObject.game.cell.index = 3;
    break;
  case "four" :
    console.log("four!");
    gameObject.game.cell.index = 4;
    break;
  case "five" :
    console.log("five!");
    gameObject.game.cell.index = 5;
    break;
  case "six" :
    console.log("six!");
    gameObject.game.cell.index = 6;
    break;
  case "seven" :
    console.log("seven!");
    gameObject.game.cell.index = 7;
    break;
  case "eight" :
    console.log("eight!");
    gameObject.game.cell.index = 8;
    break;
}
};

  if(app.currentMove === "x"){
      if($(this).text() === ""){
        $(this).text("X");
        gameObject.game.cell.value = "x";
        setGameObjectIndex(this.id);
        cells[gameObject.game.cell.index] = "x"
        if(winVerify.xWon){
          gameObject.game.over = true;
        }
        console.log(gameObject);
        api.updateGame(gameObject)
        .done(ui.updateSuccess)
        .fail(ui.failure);
        app.currentMove = "o";
      //also need to add it into the cells array somehow--update will send whole game back
    }
  } else if (app.currentMove === "o"){
  if($(this).text() === ""){
  $(this).text("O");
  gameObject.game.cell.value = "o";
  setGameObjectIndex(this.id);
  api.updateGame(gameObject)
  .done(ui.updateSuccess)
  .fail(ui.failure);
  app.currentMove = "x";
  //also need to run win functions to check
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
  move,
};
