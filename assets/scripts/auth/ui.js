'use strict';

const app = require('../app.js')

const success = (data) => {
  console.log(data);
  console.log("success!")
  $('#sign-up').children().children('.remove').val("");
  $('#change-password').children().children('.remove').val("")
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function(data){
  app.user = data.user;
  console.log(app);
  $('#sign-in').children().children('.remove').val("")
  $('#sign-up').hide();
  $('#sign-in').children().children('legend').text("You are signed in as " + app.user.email);
  $('#sign-in').children().children('input').hide();
};

const signOutSuccess = function(){
  app.user = null;
  console.log(app);
  $('#sign-up').show();
  $('#sign-in').children().children('legend').text("Sign In!");
  $('#sign-in').children().children('input').show();
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
