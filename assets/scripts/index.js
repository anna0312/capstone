'use strict'

const authEvents = require('./auth/events')
const gmapsEvents = require('./gmaps/events')
const gmapsAutocomplete = require('./gmaps/autocomplete')
const dragula = require('dragula')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authEvents.addHandlers()
  gmapsEvents.addHandlers()
  gmapsAutocomplete.initMap()
//  gmapsAutocomplete.initMap()
  // gameEvents.addHandlers
  // statsEvents.addHandlers
})

dragula([
  document.getElementById('b1'),
  document.getElementById('b2'),
  document.getElementById('b3')
])

// Scrollable area
var element = document.getElementById("boards"); // Count Boards
var numberOfBoards = element.getElementsByClassName('board').length;
var boardsWidth = numberOfBoards*316 // Width of all Boards
console.log(boardsWidth);
element.style.width = boardsWidth+"px"; // set Width

// disable text-selection
function disableselect(e) {return false;}
document.onselectstart = new Function ()
// document.onmousedown = disableselect
