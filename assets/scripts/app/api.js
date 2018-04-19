'use strict'

const config = require('../config.js')
const store = require('../store.js')

const newPlaceSave = function (data) {
  console.log('got to the api step')
  return $.ajax({
    url: config.apiUrl + '/places/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getPlacesOfInterest = function (data) {
  console.log('got to the api step places of interest')
  return $.ajax({
    url: config.apiUrl + '/placesOfInterest/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getDestinations = function () {
  console.log('got to the api step destinations')
  return $.ajax({
    url: config.apiUrl + '/destinations/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlaceOrder = function (data) {
  return $.ajax({
    url: config.apiUrl + '/updatePlaceOrder/' + data.place.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePlaceCategory = function (data) {
  return $.ajax({
    url: config.apiUrl + '/updateCategory/' + data.place.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlace = function (id) {
  // console.log('id is', id)
  return $.ajax({
    url: config.apiUrl + '/places/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

const showPlace = function (id) {
  // console.log('id is', id)
  console.log('api id is', id)
  return $.ajax({
    url: config.apiUrl + '/places/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

const getDistance24InfoAjax = function (city) {
  const url = 'https://www.distance24.org/api.xhtml'
  return $.ajax({
    url: url,
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}






module.exports = {
  newPlaceSave,
  getPlacesOfInterest,
  getDestinations,
  updatePlaceCategory,
  updatePlaceOrder,
  showPlace,
  deletePlace,
  getDistance24InfoAjax
}
