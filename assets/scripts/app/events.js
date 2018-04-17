'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
// const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPlaces = function (event) {
  event.preventDefault()
  api.getPlacesOfInterest()
    .then(ui.onGetPlacesSuccess)
    .catch(ui.onGeneralFailure)

  // api.getDestinations()
  //   .then(ui.onGetDestinationsSuccess)
  //   .catch(ui.onGeneralFailure)
}

const onNewPlaceSave = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.newPlaceSave(data)
    .then(ui.onNewPlaceSaveSuccess)
    .catch(ui.onGeneralFailure)
}

// const onGetWeather = function (event) {
//   event.preventDefault()
//   console.log('getting weather')
//   const data = getFormFields(this)
//   const weatherString = 'January | -1 °F | 29 °F | 61 °F February | -6 °F | 31 °F | 60 °F March | 10 °F | 38 °F | 73 °F April | 20 °F | 48 °F | 78 °F May | 40 °F | 58 °F | 83 °F June | 47 °F | 67 °F | 88 °F July | 57 °F | 73 °F | 91 °F August | 55 °F | 72 °F | 91 °F September | 46 °F | 64 °F | 84 °F October | 35 °F | 54 °F | 76 °F November | 21 °F | 45 °F | 68 °F December | -1 °F | 34 °F | 64 °F'
//   const weatherArr = weatherString.split('|')
//   // api.getWeather(data)
//   //   .then(ui.onGetWeather)
//   //   .catch(ui.onGeneralFailure)
// }

const onUpdatePlaceOrder = function (id, sortOrder) {
  const data = {
    'place': {
      id: id,
      'sortOrder': sortOrder
    }
  }
  //
  // api.updatePlaceOrder(data)
  //   .then(ui.onNewPlaceSaveSuccess)
  //   .catch(ui.onGeneralFailure)
}

const addHandlers = () => {
  $('body').on('submit', '#save-new-place', onNewPlaceSave)
  // $('#get-weather').on('submit', onGetWeather)
  $('#get-places').on('click', onGetPlaces)
  // $('.card').on('drop', onMoveCard)
}

module.exports = {
  addHandlers,
  onUpdatePlaceOrder
}
