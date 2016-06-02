'use strict';

const showSignUpForm = () => {
  $('#sign-up-form').show();
};
const showSignInForm = () => {
  $('#sign-in-form').show();
};
const hideSignUpForm = () => {
  $('#sign-up-form').hide();
};
const hideSignInForm = () => {
  $('#sign-in-form').hide();
};
const showChangePassword = () => {
  $('#show-change-password').show();
};
const showSignOut = () => {
  $('#sign-out').show();
};
const hideChangePassword = () => {
  $('#show-change-password').hide();
};
const hideSignOut = () => {
  $('#sign-out').hide();
};

const showChangePasswordForm = () =>{
  $('#change-password-form').show();
};

const hideChangePasswordForm = () => {
  $('#change-password-form').hide();
};

const uiHandlers = () => {
  $('#show-sign-up').on('click', showSignUpForm);
  $('#show-sign-in').on('click', showSignInForm);
  $('#show-change-password').on('click', showChangePasswordForm);
};

module.exports = {
  uiHandlers,
  showSignUpForm,
  showSignInForm,
  hideSignUpForm,
  hideSignInForm,
  showChangePassword,
  showSignOut,
  hideChangePassword,
  hideSignOut,
  showChangePasswordForm,
  hideChangePasswordForm,
};
