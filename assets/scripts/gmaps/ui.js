
// const store = require('../store')
require('bootstrap-notify')

const onGetDistanceSuccess = function (data) {
  console.log(data)
  $.notify({
    // options
    message: 'got it'
  },
  {
    // settings
    type: 'success'
  })
}
module.exports = {
  onGetDistanceSuccess
}
