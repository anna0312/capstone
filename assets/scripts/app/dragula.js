'use strict'
const dragula = require('dragula')

const loadDragula = function () {
  dragula([
    document.getElementById('places-of-interest'),
    document.getElementById('planned-destinations')
  ])

  // Scrollable area
  const element = document.getElementById('boards') // Count Boards
  const numberOfBoards = element.getElementsByClassName('board').length
  const boardsWidth = numberOfBoards * 316 // Width of all Boards
  console.log(boardsWidth)
  element.style.width = boardsWidth + 'px'// set Width

  // disable text-selection
  function disableselect(e) {return false}
  document.onselectstart = new Function ()
// document.onmousedown = disableselect
}

module.exports = {
  loadDragula
}
