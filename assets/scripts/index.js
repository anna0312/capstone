'use strict'

const authEvents = require('./auth/events')
const appEvents = require('./app/events')
const dragula = require('./app/dragula')
const gmaps = require('./app/gmaps')


// const modernizer = require('./app/modernizer')
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

  // sets navbar background when scrolled past bg image
  $(function () {
    $(document).scroll(function () {
      const $nav = $('.navbar-fixed-top')
      $nav.toggleClass('scrolled', $(this).scrollTop() > 500)
    })
  })
})
