'use strict';

const app = require('../app.js');

const createGameSuccess = (data) => {
  app.game = data.game;
  app.currentMove= "x";
  console.log(app);
  console.log(data);
  $('#current-message').text("A new game has begun! You are X.");
};

const failure = (error) => {
  console.error(error);
};

const updateSuccess = (data) => {
  console.log(data);
};

const switchPlayer = (marker) => {
  $('#current-message').text("It is " + marker + "'s turn!")
}

const logSingleGame = function(data) {
  console.log(data.game);
};
const logGames = function(data){
  console.log(app.user);
  $('#num-of-games-played').text(app.user.email + ", you have played " +
  data.games.length + " games!")
};

module.exports = {
  createGameSuccess,
  failure,
  updateSuccess,
  logSingleGame,
  logGames,
  switchPlayer,
};
