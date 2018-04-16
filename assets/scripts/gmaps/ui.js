
// const store = require('../store')
require('bootstrap-notify')

const onNewPlaceSaveSuccess = function (data) {
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

const onGeneralFailure = function (data) {
  console.log('failure', data)
  $.notify({
    // options
    message: 'failed'
  },
  {
    // settings
    type: 'danger'
  })
}
module.exports = {
  onNewPlaceSaveSuccess,
  onGeneralFailure
}
