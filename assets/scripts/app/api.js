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
  console.log('got to the api step')
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
  console.log('got to the api step')
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

const getWeather = function (data) {
  const lat = data.weather.lat
  const lng = data.weather.lng
  const url = 'http://www4f.wolframalpha.com/input/json.jsp?async=false&dbid=MSP14704132dibge4gb8he4a00006208985if370hg2d&format=image,plaintext,imagemap,sound,minput,moutput&includepodid=ClimateCharts:WeatherData&input=climate+latitude+' + lat + '+longitude+' + lng + '&output=JSON&podTitle=Result+for+42%C2%B0+20%27+32%22N,+71%C2%B0+4%27+45%22W&podstate=MSP14704132dibge4gb8he4a00006208985if370hg2d&statemethod=deploybutton&storesubpodexprs=true&text=More'
  return $.ajax({
    url: url,
    method: 'GET',
    data
  })
}

module.exports = {
  newPlaceSave,
  getPlacesOfInterest,
  getDestinations,
  updatePlaceCategory,
  updatePlaceOrder,
  deletePlace,
  getWeather
}
