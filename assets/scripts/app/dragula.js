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
      .catch(ui.onGeneralFailure)

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
        .then(ui.onUpdatePlaceOrderSuccess)
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
