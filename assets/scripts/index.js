'use strict';

const authEvents = require('./auth/events.js');
const gamePlayEvents = require('./gamePlay/events.js');
const ui = require('./uiGeneral.js')

// On document ready
$(() => {
  $('#clearBoard').hide();
  ui.hideSignUpForm();
  ui.hideSignInForm();
  $('#change-password-form').hide();
  ui.hideChangePassword();
  ui.hideSignOut();
  $('#newGame').hide();
  $('#fetch-games').hide();
  ui.uiHandlers();
  authEvents.addHandlers();
  gamePlayEvents.gameHandlers();
});
