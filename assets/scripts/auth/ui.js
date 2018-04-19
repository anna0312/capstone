'use strict'

const store = require('../store')
const appEvents = require('../app/events')
require('bootstrap-notify')

const onSignInSuccess = function (data) {
  $.notify({
    // options
    message: 'Welcome back!'
  },
  {
    // settings
    type: 'success',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })

  $('#signInModal').modal('hide')

  $('#signInForm').each(function () {
    this.reset()
  })
  store.user = data.user
  $('.change-password').css('display', 'block')
  $('.order-history').css('display', 'block')
  $('.sign-in').css('display', 'none')
  $('.sign-up').css('display', 'none')
  $('.sign-out').css('display', 'block')
  $('.visible-loggedin').css('display', 'block')

  appEvents.onGetPlaces()
}

const onSignInFailure = function () {
  $.notify({
    // options
    message: 'Sorry, no dice'
  },
  {
    // settings
    type: 'danger'
  })
}

const onSignOutSuccess = function () {
  $.notify({
    // options
    message: 'Successfully signed out'
  },
  {
    // settings
    type: 'info'
  })
  $('.change-password').css('display', 'none')
  $('.sign-in').css('display', 'block')
  $('.sign-up').css('display', 'block')
  $('.sign-out').css('display', 'none')
  $('.visible-loggedin').css('display', 'none')

  // clear all handlebars areas
  $('#interested').html('')
  $('#going').html('')
  $('#place-details').html('')

}

const onSignUpSuccess = function () {
  $.notify({
    // options
    message: 'Welcome'
  },
  {
    // settings
    type: 'success'
  })
  $('#signUpModal').modal('hide')

  $('#signUpForm').each(function () {
    this.reset()
  })
}

const onSignUpFailure = function () {
  $.notify({
    // options
    message: 'There was a problem'
  },
  {
    // settings
    type: 'danger'
  })
}

const onChangePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $.notify({
    // options
    message: 'Success!'
  },
  {
    // settings
    type: 'success'
  })
}

const onChangePasswordFailure = function () {
  $.notify({
    // options
    message: 'Something went wrong'
  },
  {
    // settings
    type: 'danger'
  })
}

module.exports = {
  onSignInSuccess,
  onSignUpSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
