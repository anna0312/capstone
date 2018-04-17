'use strict'
const dragula = require('dragula')

const loadDragula = function () {
  dragula([
    document.getElementById('places-of-interest'),
    document.getElementById('planned-destinations')
  ]).on('drop', function (el, target, sibling) {
    console.log('el', el.id)

    // get id of moved card
    // get id of target
    // if target = planned destinations
    console.log('target', target)
    console.log('sibling', sibling)
  })
  // document.onmousedown = disableselect
}

module.exports = {
  loadDragula
}
