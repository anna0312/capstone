'use strict'
const dragula = require('dragula')
const events = require('./events')
const api = require('./api')
const ui = require('./ui')

const loadDragula = function () {
  dragula([
    document.getElementById('interested'),
    document.getElementById('going')
  ]).on('drop', function (el, target, sibling) {
    const data = {
      'place': {
        'id': el.id,
        'category': target.id
      }
    }
    api.updatePlaceCategory(data)
      .then(ui.onUpdatePlaceCategorySuccess)
      .then(api.getPlacesOfInterest)
      .catch(ui.onGeneralFailure)

    // console.log('el', el.id)

    // get id of moved card
    // get id of target
    // if target = planned destinations
    // console.log('target', target)
    // console.log('sibling', sibling)
    // const allLocations = []
    const arrPlaces = []
    $('#going div.card').each(function (i, val) {
      arrPlaces.push($(this).attr('id'))
      const sortData = {
        'place': {
          'id': val.id,
          'sortOrder': i
        }
      }
      api.updatePlaceOrder(sortData)
        .then(api.getDestinations)
        .catch(ui.onGeneralFailure)

    //  console.log('arrPlaces ', arrPlaces)
      // allLocations.push($(this).attr('id'))
      // console.log('i is', i)
    })

  })
  // document.onmousedown = disableselect
}

module.exports = {
  loadDragula
}
