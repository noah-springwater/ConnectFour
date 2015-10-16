console.log('Let\'s do this thing');


//
// - Grab each of the cells
// - Create click event function

//creates constructor for 1 cell
var Cell = function() {
  //set the value of the cell to 0
  this.value = null;
  this.isPlayable = true;
};

//constructor Board
var Board = function() {
  this.gameboard = [];
  this.currentPlayer = 1;
  this.makeCells = function() {
    for (var row = 0; row < 7; row++) {
      var rowArray = [];
      var rowDiv = $('<div>')
      rowDiv.addClass('row')
      for (var col = 0; col < 8; col++) {
        rowArray.push(new Cell());
        var cellDiv = $('<div>');
        cellDiv.addClass('cell');
        cellDiv.attr('id', row + '-' + col)
        rowDiv.append(cellDiv)
      }
      this.gameboard.push(rowArray);
      $('.entireBoard').append($(rowDiv));
    };
  };

  this.changeColorRed = function() {
    $('.cell').on('click', function() {
      var index = this.id.split('-')
      var cell = newBoard.gameboard[index[0]][index[1]]
      if (newBoard.currentPlayer === 1 && cell.isPlayable) {
        cell.value = 'red'
        $(this).css('background-color', 'red')
        cell.isPlayable = false;
        newBoard.currentPlayer *= -1;
        console.log(cell)
        console.log(this);
      }
    })
  };

  this.changeColorBlack = function(){

  $('.cell').on('click', function(){
    var index = this.id.split('-')

  var cell = newBoard.gameboard[index[0]][index[1]]
  if(newBoard.currentPlayer === -1 && cell.isPlayable){
  cell.value = 'black'
  $(this).css('background-color','black')
  cell.isPlayable = false;
  newBoard.currentPlayer *= -1;
  console.log(cell)
        }
      })

  };


  var game {



  }

  //you have 3 values in cells, player, and winner
  //cells are an array, currentPlayer is either 1 or -1, winner = false
  //function 1 - setBoard()
  //       will loop through and set all of the cells to the value of Cell constructor
  //

  //function 2 - makePlay()
  //
  //function 3 - checkWin()
};


//object literal game
// var game = {
//
//
// };
