'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
// const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onDistanceSubmit = function (event) {
  event.preventDefault()
  console.log('event fired')
  const data = getFormFields(this)
  api.getDistance(data)
    .then(ui.onGetDistanceSuccess)
    .catch(ui.onGetDistanceFailure)
}

const onNewPlaceSave = function (event) {
  event.preventDefault()
  console.log('saved city attempt')
  const data = getFormFields(this)
  api.newPlaceSave(data)
    .then(ui.onNewPlaceSaveSuccess)
    .catch(ui.onGeneralFailure)
}

const addHandlers = () => {
  $('#get-distance').on('submit', onDistanceSubmit)
  $('body').on('submit', '#save-new-place', onNewPlaceSave)
}

module.exports = {
  addHandlers
}
