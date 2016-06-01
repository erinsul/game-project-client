'use strict';

const app = require('../app.js')

const success = (data) => {
  app.game = data.game;
  app.currentMove= "x";
  console.log(app);
  console.log(data);
  console.log("you are player x")
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  success,
  failure
};
