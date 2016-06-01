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
  let gameObject = {
    "game": {
      "cell": {
        "index": 0,
        "value": ""
    },
      "over": false
  }
};
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

  if(app.currentMove === "x"){
      if($(this).text() === ""){
        $(this).text("X");
        gameObject.game.cell.value = "x";
        setGameObjectIndex(this.id);
        cells[gameObject.game.cell.index] = "x";
        console.log(cells);
        if(winVerify.win(cells, "x")){
          gameObject.game.over = true;
          console.log("x won!");
        }
        console.log(gameObject);
        api.updateGame(gameObject)
        .done(ui.updateSuccess)
        .fail(ui.failure);
        if(gameObject.game.over){
          app.currentMove = "";
        } else {
        app.currentMove = "o";
        }
    }
  } else if (app.currentMove === "o") {
  if($(this).text() === ""){
  $(this).text("O");
  gameObject.game.cell.value = "o";
  setGameObjectIndex(this.id);
  cells[gameObject.game.cell.index] = "o";
  if(winVerify.win(cells, "o")){
    gameObject.game.over = true;
  }
  api.updateGame(gameObject)
  .done(ui.updateSuccess)
  .fail(ui.failure);
  if(gameObject.game.over){
    app.currentMove = "";
  } else {
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
  move,
};
