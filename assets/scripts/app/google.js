const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDgzo8T8525gSc5HkvI5AAKXfbd_KKaKCs',
  Promise: Promise
})

const geocodeMap = function () {
  googleMapsClient.geocode({address: '1600 Amphitheatre Parkway, Mountain View, CA'})
    .asPromise()
    .then((response) => {
      console.log(response.json.results)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  geocodeMap
}
