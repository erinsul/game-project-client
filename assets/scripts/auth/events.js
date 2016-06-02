'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = function(event){
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function(event){
  let data = getFormFields(event.target);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onSignOut = function(event){
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail();
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#change-password-form').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};
