'use strict'

const authEvents = require('./auth/events')
const appEvents = require('./app/events')
const dragula = require('./app/dragula')
const gmaps = require('./app/gmaps')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  authEvents.addHandlers()
  appEvents.addHandlers()
  dragula.loadDragula()
  gmaps.initMap()
  // gameEvents.addHandlers
  // statsEvents.addHandlers
})
