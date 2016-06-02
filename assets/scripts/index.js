'use strict';

const authEvents = require('./auth/events.js');
const gamePlayEvents = require('./gamePlay/events.js');

// On document ready
$(() => {
  $('#clearBoard').hide();
  authEvents.addHandlers();
  gamePlayEvents.gameHandlers();
});
