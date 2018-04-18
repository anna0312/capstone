'use strict'

const placeInfo = require('../templates/placeInfo.handlebars')

const GoogleMapsLoader = require('google-maps')
//const ui = require('./ui')

GoogleMapsLoader.KEY = 'AIzaSyDgzo8T8525gSc5HkvI5AAKXfbd_KKaKCs'
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

let markers = []
let route = []

function initMap () {
  $('#gmap').css('display', 'block')
  GoogleMapsLoader.load(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -33.8688,
        lng: 151.2195
      },
      zoom: 13
    })
    const card = document.getElementById('pac-card')
    const input = document.getElementById('pac-input')
    const types = document.getElementById('type-selector')
    const strictBounds = document.getElementById('strict-bounds-selector')

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card)

    const autocomplete = new google.maps.places.Autocomplete(input)

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map)

    const infowindow = new google.maps.InfoWindow()
    const infowindowContent = document.getElementById('infowindow-content')
    infowindow.setContent(infowindowContent)
    const marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    })

    autocomplete.addListener('place_changed', function () {
      infowindow.close()
      marker.setVisible(false)
      const place = autocomplete.getPlace()
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: ' + place.name)
        return
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport)
      } else {
        map.setCenter(place.geometry.location)
        map.setZoom(17) // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location)
      marker.setVisible(true)

      let address = ''
      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ')
      }

      // find city and country name
      let city = ''
      let country = ''
      for (let i = 0; i < place.address_components.length; i++) {
        for (let b = 0; b < place.address_components[i].types.length; b++) {
          if (place.address_components[i].types[b] === 'locality') {
            city = place.address_components[i]
          }
          if (place.address_components[i].types[b] === 'country') {
            country = place.address_components[i]
          }
        }
      }

      place.city = city.long_name
      place.country = country.long_name

      infowindowContent.children['place-icon'].src = place.icon
      infowindowContent.children['place-name'].textContent = place.name
      infowindowContent.children['place-address'].textContent = address

      $('#place-address').html(placeInfo({
        place: place
      }))

      console.log(place)
      //  infowindowContent.children['place-id'].textContent = place.name
      infowindow.open(map, marker)
    })

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener (id, types) {
      const radioButton = document.getElementById(id)
      radioButton.addEventListener('click', function () {
        autocomplete.setTypes(types)
      })
    }

    setupClickListener('changetype-all', [])
    setupClickListener('changetype-address', ['address'])
    setupClickListener('changetype-establishment', ['establishment'])
    setupClickListener('changetype-geocode', ['geocode'])

    document.getElementById('use-strict-bounds')
      .addEventListener('click', function () {
        console.log('Checkbox clicked! New state=' + this.checked)
        autocomplete.setOptions({
          strictBounds: this.checked
        })
      })
  })
}

module.exports = {
  initMap
}
