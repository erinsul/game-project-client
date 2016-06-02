'use strict';

const app = require('../app.js');
const uiGen = require('../uiGeneral.js');

const signUpSuccess = (data) => {
  console.log(data);
  uiGen.hideSignUpForm();
  $('#current-message').text("You have successfully signed up!");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function(data){
  app.user = data.user;
  console.log(app);
  uiGen.hideSignInForm();
  $('#sign-in-form').children().children('.remove').val("");
  uiGen.hideSignUpForm();
  uiGen.showChangePassword();
  uiGen.showSignOut();
  $('#current-message').text("You are signed in as " + app.user.email);
  $('#newGame').show();
};

const changePasswordSuccess = function(){
  uiGen.hideChangePasswordForm();
  $('#change-password-form').children().children('.remove').val("");
  $('#current-message').text("You have successfully changed your password!");
}

const signOutSuccess = function(){
  app.user = null;
  console.log(app);
  uiGen.hideSignUpForm();
  uiGen.hideSignInForm();
  uiGen.hideChangePassword();
  uiGen.hideSignOut();
  $('#current-message').text("You must sign in to play!");
  $('#newGame').hide();
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
