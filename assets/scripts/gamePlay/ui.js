'use strict';

const app = require('../app.js');

const createGameSuccess = (data) => {
  app.game = data.game;
  app.currentMove= "x";
  $('#current-message').text("A new game has begun! You are X.");
  $('#newGame').hide();
};

const switchPlayer = (marker) => {
  $('#current-message').text("It is " + marker + "'s turn!");
};

const logGames = function(data){
  $('#num-of-games-played').text(app.user.email + ", you have played " +
  data.games.length + " games!");
};

module.exports = {
  createGameSuccess,
  logGames,
  switchPlayer,
};
