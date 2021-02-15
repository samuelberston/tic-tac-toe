var turn = true;



var checkForWinner = function(event) {
  var cell1 = document.getElementById('cell-1').innerHTML;
  var cell2 = document.getElementById('cell-2').innerHTML;
  var cell3 = document.getElementById('cell-3').innerHTML;
  var cell4 = document.getElementById('cell-4').innerHTML;
  var cell5 = document.getElementById('cell-5').innerHTML;
  var cell6 = document.getElementById('cell-6').innerHTML;
  var cell7 = document.getElementById('cell-7').innerHTML;
  var cell8 = document.getElementById('cell-8').innerHTML;
  var cell9 = document.getElementById('cell-9').innerHTML;

  // horizontal winner
  if (cell1 !== "" && cell1 == cell2 && cell1 === cell3 ||
      cell4 !== "" && cell4 == cell5 && cell4 === cell6 ||
      cell7 !== "" && cell7 == cell8 && cell7 === cell9
    ) {
    document.getElementById('message').children[0].innerHTML = `${event.target.innerHTML} won!!`
  }

  // vertical winner
  if (cell1 !== "" && cell1 === cell4 && cell1 === cell7 ||
      cell2 !== "" && cell2 === cell5 && cell2 === cell8 ||
      cell3 !== "" && cell3 === cell6 && cell3 === cell9
    ) {
    document.getElementById('message').children[0].innerHTML = `${event.target.innerHTML} won!!`
  }

  // diagonal winner
  if (cell1 !== "" && cell1 === cell5 && cell1 === cell9 ||
      cell3 !== "" && cell3 === cell5 && cell3 === cell7
  ) {
    document.getElementById('message').children[0].innerHTML = `${event.target.innerHTML} won!!`
  }

  // draw
  else if (cell1 !== "" && cell2 !== "" && cell3 !== "" && cell4 !== "" && cell5 !== "" && cell6 !== "" && cell7 !== "" && cell8 !== "" && cell9 !== "") {
    document.getElementById('message').children[0].innerHTML = 'Noone won :('
  }
}

var handleCellClick = function(event) {
  while (event.target.innerHTML === "") {
    if (turn) {
      event.target.innerHTML = 'x';
      document.getElementById('message').children[0].innerHTML = 'it\'s o\'s turn';
      turn = !turn;
      checkForWinner(event)
    } else {
      event.target.innerHTML = 'o';
      document.getElementById('message').children[0].innerHTML = 'it\'s x\'s turn';
      turn = !turn;
      checkForWinner(event)
    }
  }
}

// set event listeners
var cells = document.getElementsByClassName("cell");

for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = handleCellClick;
}