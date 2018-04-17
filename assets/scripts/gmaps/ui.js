
// const store = require('../store')
require('bootstrap-notify')

const onNewPlaceSaveSuccess = function (data) {
  console.log('success', data)
  $.notify({
    message: 'Place has been saved!'
  },
  {
    type: 'success'
  })
}

const onGetPlacesSuccess = function (data) {
  console.log('success', data)
  $('#kaban').css('display', 'block')
}

const onGetWeatherSuccess = function (data) {
  console.log('success', data)
  $.notify({
    // options
    message: 'Weather woot!!!'
  },
  {
    // settings
    type: 'success'
  })
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
  onGetWeatherSuccess,
  onGeneralFailure
}
