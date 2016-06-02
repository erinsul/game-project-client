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
        $(this).text(app.currentMove);
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
          break;
          //otherwise, switches to x
        case "o" :
        app.currentMove = "x";
        break;
        }
    }
  }
};

const gameHandlers = () => {
$('#newGame').on('click', onNewGame);
// $('#joinGame').on('click', onJoinGame);
$('.container').children().children('section').on('click', move);
$('#clearBoard').on('click', gameBoard.onClearBoard);
};

module.exports = {
  gameHandlers,
};
