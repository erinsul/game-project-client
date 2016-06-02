'use strict';
const app = require('../app.js');

const createNewGame = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    data: '',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const updateGame = (gameObject) => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    data: gameObject,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const getGameIndex = function() {
  return $('#gameIndex').val();
};

const getGames = function(){
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

const getSingleGame = function(gameID){
  return $.ajax({
    url: app.host + '/games/' + gameID,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

// const joinGame = () => {
//   return $.ajax({
//     url: app.host + '/games/' + app.id,
//     method: 'POST',
//     data: '',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }
//   });
// };

module.exports = {
  createNewGame,
  updateGame,
  getGameIndex,
  getGames,
  getSingleGame,
};
