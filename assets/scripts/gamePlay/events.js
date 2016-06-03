'use strict';
const api = require('./api');
const ui = require('./ui');
const app = require('../app.js');
const gameBoard = require('./gameBoard.js');

const onNewGame = function (event){
  event.preventDefault();
  api.createNewGame()
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const move = function(){
    //prevents moving if already occupied
      if($(this).text() === ""){
        //sets text on board
        if(app.currentMove === "x"){
        $(this).html('<img src ="assets/images/Crossbones.jpg"/>');
      } else if (app.currentMove === "o") {
        $(this).html('<img src ="assets/images/Skull.jpg"/>')
      }
        let id = this.id;
        //sets game object
        let gameObject = gameBoard.setGameObject(app.currentMove, id);
        //sends fully updated game object
        api.updateGame(gameObject)
        .done(ui.updateSuccess)
        .fail(ui.failure);
        //if game over
        if(gameObject.game.over){
          gameBoard.gameOver();
        } else {
        switch(app.currentMove){
        case "x" :
          app.currentMove = "o";
          ui.switchPlayer("o");
          break;
          //otherwise, switches to x
        case "o" :
        app.currentMove = "x";
        ui.switchPlayer("x");
        break;
        }
    }
  }
};

const onGetGame = (event) => {
  event.preventDefault();
  api.getGames()
  .done(ui.logGames)
  .fail(ui.failure);
  // let gameIndex = api.getGameIndex();
  // if(gameIndex){
  // api.getSingleGame(gameIndex)
  // .done(ui.logSingleGame)
  // .fail(ui.failure);
};

const gameHandlers = () => {
$('#newGame').on('click', onNewGame);
// $('#joinGame').on('click', onJoinGame);
$('.container').children().children('section').on('click', move);
$('#clearBoard').on('click', gameBoard.onClearBoard);
$('#getGames').on('click', onGetGame);
};

module.exports = {
  gameHandlers,
};
