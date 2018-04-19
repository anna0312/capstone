'use strict'
const store = require('../store')
require('bootstrap-notify')
const api = require('./api')
const helpers = require('../helpers')
const c3 = require('c3')


const destinationcards = require('../templates/destinationcards.handlebars')
const placecards = require('../templates/placecards.handlebars')
const placedetail = require('../templates/placedetail.handlebars')

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
    store.destinations[i].distanceFromPrevious = distance.toFixed(0)
    console.log('distance from ' + store.destinations[i - 1].name + ' to ' + store.destinations[i].name + ': ' + store.destinations[i].distanceFromPrevious)
  }

  $('#going').html(destinationcards({ places: store.destinations }))
}

const onShowPlaceSuccess = function (data) {
  console.log('place: ', data)
  $('#board3').html(placedetail({ place: data.place }))

  const chart = c3.generate({
    data: {
      x: 'x',
      //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
      columns: [
        ['x', 'Jan', 'Feb', 'Mar', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
        ['High', 30, 40, 50, 60, 70, 80, 90, 80, 70, 60, 50, 40],
        ['Low', 10, 15, 20, 30, 40, 60, 65, 55, 50, 40, 20, 5]
      ]
    },
    axis: {
      x: {
        type: 'category'
      }
    },
    color: {
      pattern: ['#f90939', '#27c1f9']
    }
  })
//  helpers.getDistance24Info()
}

const onUpdatePlaceCategorySuccess = function (data) {
  console.log('update category success')
  // events.onGetPlaces()
}

const onUpdatePlaceOrderSuccess = function (data) {
  console.log('update order success')
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


const onGetDistance24InfoSuccess = function (data) {
  console.log('24 info', data)
  // events.onGetPlaces()
}


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
  onShowPlaceSuccess,
  onDeletePlaceSuccess,
  onGetDistance24InfoSuccess,
  onGeneralFailure
}
