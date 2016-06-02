'use strict';

const app = require('../app.js');

const createGameSuccess = (data) => {
  app.game = data.game;
  app.currentMove= "x";
  console.log(app);
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const updateSuccess = (data) => {
  console.log(data);
};

const logSingleGame = function(data) {
  console.log(data.game);
};
const logGames = function(data){
  console.table(data.games);
};

module.exports = {
  createGameSuccess,
  failure,
  updateSuccess,
  logSingleGame,
  logGames,
};
