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
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
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
    message: 'Please try again'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
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
}

const onSignOutSuccess = function () {
  $.notify({
    // options
    message: 'So long!'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
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
  $('#pac-input').val('')


}

const onSignUpSuccess = function () {
  $.notify({
    // options
    message: 'Oh the places you\'ll go!'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })
  $('#signUpModal').modal('hide')
  $('#signUpForm').each(function () {
    this.reset()
  })
}

const onSignUpFailure = function () {
  $.notify({
    // options
    message: 'There was a problem. Have you already registered?'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })

  $('#signUpModal').modal('hide')
  $('#signUpForm').each(function () {
    this.reset()
  })
}

const signUpFailPwdMatch = function () {
  $.notify({
    // options
    message: 'Your password and password confirmation don\'t match'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })
  $('#signUpForm').each(function () {
    this.reset()
  })
}


const onChangePasswordSuccess = function () {
  $.notify({
    // options
    message: 'Your password and password confirmation don\'t match'
  },
  {
    // settings
    type: 'minimalist',
    placement: {
      from: 'top',
      align: 'center'
    },
    offset: 30,
    spacing: 10,
    z_index: 9999,
    delay: 1000,
    timer: 2000,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    }
  })
  $('#changePasswordModal').modal('hide')
  $('#changePasswordForm').each(function () {
    this.reset()
  })
}

const onChangePasswordFailure = function () {
  $.notify({
    // options
    message: 'Something went wrong'
  },
  {
    // settings
    type: 'minimalist'
  })
  $('#changePasswordModal').modal('hide')
  $('#changePasswordForm').each(function () {
    this.reset()
  })
}

module.exports = {
  onSignInSuccess,
  onSignUpSuccess,
  onSignInFailure,
  onSignUpFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  signUpFailPwdMatch
}
