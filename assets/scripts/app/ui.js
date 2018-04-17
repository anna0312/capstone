
// const store = require('../store')
require('bootstrap-notify')
const placecards = require('../templates/placecards.handlebars')

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
  $('#places-of-interest').html(placecards({ places: data.places }))
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
