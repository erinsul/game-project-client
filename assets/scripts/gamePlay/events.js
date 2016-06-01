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
  if(app.currentMove === "x"){
      if($(this).text() === ""){
      $(this).text("X");
      app.currentMove = "o";
      //api.update function goes here to send the cell data
      //also need some kind of update to my "cells" array
      //also need to run win functions to check
    }
  } else if (app.currentMove === "o")
  if($(this).text() === ""){
  $(this).text("O");
  app.currentMove = "x";
  //api.update function goes here to send the cell data
  //also need some kind of update to my "cells" array
  //also need to run win functions to check
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

// const onJoinGame = function(event){
//   event.preventDefault();
//   api.joinGame()
//   .done(console.log("yay"))
//   .fail(ui.failure);
// }
