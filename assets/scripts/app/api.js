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

const getDestinations = function (data) {
  console.log('got to the api step')
  return $.ajax({
    url: config.apiUrl + '/destinations/',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePlaceOrder = function (data) {
  return $.ajax({
    url: config.apiUrl + '/places/',
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

// const gmapApiKey = 'AIzaSyDgzo8T8525gSc5HkvI5AAKXfbd_KKaKCs'

// const getDistance = function (data) {
//   const origin = data.distance.origin
//   const destination = data.distance.destination
//   let gmapDistanceUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + origin + '&destinations=' + destination + '&key=' + gmapApiKey
//   gmapDistanceUrl = gmapDistanceUrl.replace(/\s/g, '+')
//   console.log('url', gmapDistanceUrl)
//   return $.ajax({
//     url: gmapDistanceUrl,
//     method: 'GET',
//     headers: {
//     //  'Access-Control-Allow-Origin': 'http://localhost:7165',
//       contentType: 'application/json'
//     }
//   })
// }

module.exports = {
  newPlaceSave,
  getPlacesOfInterest,
  getDestinations,
  updatePlaceCategory,
  updatePlaceOrder,
  getWeather
}
