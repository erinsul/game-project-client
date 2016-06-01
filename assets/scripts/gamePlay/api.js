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
  joinGame,
};
