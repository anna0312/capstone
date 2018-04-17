'use strict'

const authEvents = require('./auth/events')
const gmapsEvents = require('./app/events')
const gmapsAutocomplete = require('./app/autocomplete')
const dragula = require('./app/dragula')


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authEvents.addHandlers()
  gmapsEvents.addHandlers()
  gmapsAutocomplete.initMap()
  dragula.loadDragula()

  // gameEvents.addHandlers
  // statsEvents.addHandlers
})
