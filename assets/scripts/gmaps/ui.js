
// const store = require('../store')
require('bootstrap-notify')

const onGetDistanceSuccess = function (data) {
  console.log('success', data)
  $.notify({
    // options
    message: 'got it'
  },
  {
    // settings
    type: 'success'
  })
}

const onGetDistanceFailure = function (data) {
  console.log('failure', data)
  $.notify({
    // options
    message: 'failed'
  },
  {
    // settings
    type: 'success'
  })
}

module.exports = {
  onGetDistanceSuccess,
  onGetDistanceFailure
}
