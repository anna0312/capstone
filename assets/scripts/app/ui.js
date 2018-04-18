'use strict'
const store = require('../store')
require('bootstrap-notify')
const api = require('./api')
const helpers = require('../helpers')

const destinationcards = require('../templates/destinationcards.handlebars')
const placecards = require('../templates/placecards.handlebars')

const onNewPlaceSaveSuccess = function (data) {
  console.log('success', data)
  api.getPlacesOfInterest()
  $.notify({
    message: 'Place has been saved!'
  },
  {
    type: 'success'
  })
}

const onDeletePlaceSuccess = function (data) {
  console.log('success', data)
  api.getPlacesOfInterest()
  $.notify({
    message: 'Place has been deleted!'
  },
  {
    type: 'success'
  })
}

const onGetPlacesSuccess = function (data) {
  console.log('nick is watching success', data)
  $('#interested').html(placecards({ places: data.places }))
  $('#kaban').css('display', 'block')
}

const onGetDestinationsSuccess = function (data) {
  console.log('destination is success', data.places)
  store.destinations = data.places
  let previousLat = 0
  let previousLng = 0
  for (let i = 1; i < data.places.length; i++) {
    previousLat = data.places[i - 1].lat
    previousLng = data.places[i - 1].lng
    store.destinations[i].previousPlace = data.places[i - 1].name
    //  console.log('data name', previousLat)

    //  console.log('store name', store.destinations[i].name)
    const distance = helpers.geoDistance(
      previousLat,
      previousLng,
      data.places[i].lat,
      data.places[i].lng,
      'n')
    store.destinations[i].distanceFromPrevious = distance.toFixed(2)
    console.log('distance from ' + store.destinations[i - 1].name + ' to ' + store.destinations[i].name + ': ' + store.destinations[i].distanceFromPrevious)
  }

  $('#going').html(destinationcards({ places: store.destinations }))
}

const onUpdatePlaceCategorySuccess = function (data) {
  console.log('update category success', data)
  // events.onGetPlaces()
}

const onUpdatePlaceOrderSuccess = function (data) {
  console.log('update order success', data)
  // events.onGetPlaces()
}
//
// const onGetWeatherSuccess = function (data) {
//   console.log('success', data)
//   $.notify({
//     // options
//     message: 'Weather woot!!!'
//   },
//   {
//     // settings
//     type: 'success'
//   })
// }

const onGeneralFailure = function (data) {
  console.log('failure', data)
  $.notify({
    message: 'failed'
  },
  {
    type: 'danger'
  })
}
module.exports = {
  onNewPlaceSaveSuccess,
  onGetPlacesSuccess,
  onGetDestinationsSuccess,
  onUpdatePlaceCategorySuccess,
  onUpdatePlaceOrderSuccess,
  onDeletePlaceSuccess,
  onGeneralFailure
}
