'use strict'
const api = require('./app/api')
const ui = require('./app/ui')


const geoDistance = function (lat1, lon1, lat2, lon2, unit) {
  const radlat1 = Math.PI * lat1 / 180
  const radlat2 = Math.PI * lat2 / 180
  const radlon1 = Math.PI * lon1 / 180
  const radlon2 = Math.PI * lon2 / 180
  const theta = lon1 - lon2
  const radtheta = Math.PI * theta / 180
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit === 'K') {
    dist = dist * 1.609344
  }
  if (unit === 'N') {
    dist = dist * 0.8684
  }
  return dist
}

const scrollTo = function (anchor) {
  $(document.body).animate({
    'scrollTop': $('#' + anchor).offset().top
  }, 2000)
}

const getDistance24Info = function (city) {
  api.getDistance24InfoAjax(city)
    .then(ui.onGetDistance24Info)
    .catch(ui.onGeneralFailure)
}

module.exports = {
  geoDistance,
  scrollTo,
  getDistance24Info
}
