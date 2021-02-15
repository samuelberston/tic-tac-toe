// create new HTML elements

// create event handler functions
var handleCellClick = function(event) {
  event.target.innerHTML = 'x';
}

// set event listeners
var cells = document.getElementsByClassName("cell");

for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = handleCellClick;
}

// append new html elements to the DOM