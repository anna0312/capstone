'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const gmaps = require('./gmaps')
const helpers = require('../helpers')
const c3 = require('c3')
// const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetPlacesClick = function (event) {
  event.preventDefault()
  onGetPlaces()
  helpers.scrollTo('boards')
}

const onGetPlaces = function () {
  api.getPlacesOfInterest()
    .then(ui.onGetPlacesSuccess)
    .catch(ui.onGeneralFailure)
  api.getDestinations()
    .then(ui.onGetDestinationsSuccess)
    .catch(ui.onGeneralFailure)
}

const onNewPlaceSave = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.newPlaceSave(data)
    .then(ui.onNewPlaceSaveSuccess)
    .then(onGetPlaces)
    .catch(ui.onGeneralFailure)
}

const onGetGmap = function () {
  event.preventDefault()
  console.log('map!')
}


const onShowPlace = function (event) {
  event.preventDefault()
  const showId = $(event.target).data('showid')
  // console.log(showId)
  // below is delete confirmation stuff. Come back to this later
  // const confirm = confirm("Want to delete?")
  // if (confirm) {
  //     console.log('deleting', deleteId)
  // } else {
  //   console.log('not deleted')
  // }
  api.showPlace(showId)
    .then(ui.onShowPlaceSuccess)
    .catch(ui.onGeneralFailure)
}

const onDeletePlace = function (event) {
  event.preventDefault()
  const deleteId = $(event.target).data('deleteid')
  // below is delete confirmation stuff. Come back to this later
  // const confirm = confirm("Want to delete?")
  // if (confirm) {
  //     console.log('deleting', deleteId)
  // } else {
  //   console.log('not deleted')
  // }
  api.deletePlace(deleteId)
    .then(ui.onDeletePlaceSuccess)
    .then(onGetPlaces)
    .catch(ui.onGeneralFailure)
}

const addHandlers = () => {
  $('body').on('submit', '#save-new-place', onNewPlaceSave)
  $('body').on('click', '.delete-place', onDeletePlace)
  $('body').on('click', '.show-place', onShowPlace)
  // $('#get-weather').on('submit', onGetWeather)
  $('#get-places').on('click', onGetPlacesClick)
  $('#get-gmap').on('click', onGetGmap)
  // $('.card').on('drop', onMoveCard)
}

module.exports = {
  addHandlers,
  onGetPlaces
}
