//console.log('Let\'s do this thing');

window.onload = function() {
  newBoard = new Board();
  newBoard.checkWin();
  newBoard.makeCells();
  newBoard.changeColorRed();
  newBoard.changeColorYellow();
};

//Cell constructor
var Cell = function() {
  this.value = null;
  this.isPlayable = true;
};


var Board = function() {
  this.gameboard = [];
  this.currentPlayer = 1;

//create my DOM
  this.makeCells = function() {
    for (var row = 0; row < 6; row++) {
      var rowArray = [];
      var rowDiv = $('<div>')
      rowDiv.addClass('row')
      for (var col = 0; col < 7; col++) {
        rowArray.push(new Cell());
        var cellDiv = $('<div>');
        cellDiv.addClass('cell');
        cellDiv.attr('id', row + '-' + col)
        rowDiv.append(cellDiv)
      }
      //pushed into gameboard
      this.gameboard.push(rowArray);
      $('.entireBoard').append($(rowDiv));
    };
  };
//click function for Red player turn
  this.changeColorRed = function() {
    $('.cell').on('click', function() {
      index = this.id.split('-')
      cell = newBoard.gameboard[index[0]][index[1]]
      if (newBoard.currentPlayer === 1 && cell.isPlayable) {
        //sets the value to red when clicked
        cell.value = 'red'
        //this refers to the cell that was clicked on
        $(this).css('background-color', 'red')
        //sets isPlayable for whichever cell that's clicked to false
        cell.isPlayable = false;
        //switches currentPlayer
        newBoard.currentPlayer *= -1;
        //checks board
        newBoard.checkWin();
      }
    })
  };

  this.changeColorYellow = function() {

    $('.cell').on('click', function() {
      var index = this.id.split('-')
      var cell = newBoard.gameboard[index[0]][index[1]]
      if (newBoard.currentPlayer === -1 && cell.isPlayable) {
        cell.value = 'yellow'
        $(this).css('background-color', 'yellow')
        cell.isPlayable = false;
        newBoard.currentPlayer *= -1;
        newBoard.checkWin();
      }
    })
  }


  this.checkWin = function() {

//sets var for each row and column
//$("div[id^='0']") means if it begins with...
    var row0 = $("div[id^='0']");
    var row1 = $("div[id^='1']");
    var row2 = $("div[id^='2']");
    var row3 = $("div[id^='3']");
    var row4 = $("div[id^='4']");
    var row5 = $("div[id^='5']");
//*= ends with
    var col0 = $("[id*='-0']");
    var col1 = $("[id*='-1']");
    var col2 = $("[id*='-2']");
    var col3 = $("[id*='-3']");
    var col4 = $("[id*='-4']");
    var col5 = $("[id*='-5']");
    var col6 = $("[id*='-6']");
    var board = $('.cell');

    var yel = 'rgb(255, 255, 0)'
    var red = 'rgb(255, 0, 0)';

//loop through each row and column
    for (i = 0; i < row5.length; i++) {

      if ($(row5[i]).css('background-color') === red && $(row5[i + 1]).css('background-color') === red && $(row5[i + 2]).css('background-color') === red & $(row5[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row5[i]).css('background-color') === yel && $(row5[i + 1]).css('background-color') === yel && $(row5[i + 2]).css('background-color') === yel & $(row5[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };
    for (i = 0; i < row4.length; i++) {

      if ($(row4[i]).css('background-color') === red && $(row4[i + 1]).css('background-color') === red && $(row4[i + 2]).css('background-color') === red & $(row4[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row4[i]).css('background-color') === yel && $(row4[i + 1]).css('background-color') === yel && $(row4[i + 2]).css('background-color') === yel & $(row4[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };


    for (i = 0; i < row3.length; i++) {

      if ($(row3[i]).css('background-color') === red && $(row3[i + 1]).css('background-color') === red && $(row3[i + 2]).css('background-color') === red & $(row3[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row3[i]).css('background-color') === yel && $(row3[i + 1]).css('background-color') === yel && $(row3[i + 2]).css('background-color') === yel & $(row3[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < row2.length; i++) {

      if ($(row2[i]).css('background-color') === red && $(row2[i + 1]).css('background-color') === red && $(row2[i + 2]).css('background-color') === red & $(row2[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row2[i]).css('background-color') === yel && $(row2[i + 1]).css('background-color') === yel && $(row2[i + 2]).css('background-color') === yel & $(row2[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < row1.length; i++) {

      if ($(row1[i]).css('background-color') === red && $(row1[i + 1]).css('background-color') === red && $(row1[i + 2]).css('background-color') === red & $(row1[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row1[i]).css('background-color') === yel && $(row1[i + 1]).css('background-color') === yel && $(row1[i + 2]).css('background-color') === yel & $(row1[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < row0.length; i++) {

      if ($(row0[i]).css('background-color') === red && $(row0[i + 1]).css('background-color') === red && $(row0[i + 2]).css('background-color') === red & $(row0[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(row0[i]).css('background-color') === yel && $(row0[i + 1]).css('background-color') === yel && $(row0[i + 2]).css('background-color') === yel & $(row0[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < col0.length; i++) {

      if ($(col0[i]).css('background-color') === red && $(col0[i + 1]).css('background-color') === red && $(col0[i + 2]).css('background-color') === red & $(col0[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col0[i]).css('background-color') === yel && $(col0[i + 1]).css('background-color') === yel && $(col0[i + 2]).css('background-color') === yel & $(col0[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < col1.length; i++) {

      if ($(col1[i]).css('background-color') === red && $(col1[i + 1]).css('background-color') === red && $(col1[i + 2]).css('background-color') === red & $(col1[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col1[i]).css('background-color') === yel && $(col1[i + 1]).css('background-color') === yel && $(col1[i + 2]).css('background-color') === yel & $(col1[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

    for (i = 0; i < col2.length; i++) {

      if ($(col2[i]).css('background-color') === red && $(col2[i + 1]).css('background-color') === red && $(col2[i + 2]).css('background-color') === red & $(col2[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col2[i]).css('background-color') === yel && $(col2[i + 1]).css('background-color') === yel && $(col2[i + 2]).css('background-color') === yel & $(col2[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };
    for (i = 0; i < col3.length; i++) {

      if ($(col3[i]).css('background-color') === red && $(col3[i + 1]).css('background-color') === red && $(col3[i + 2]).css('background-color') === red & $(col3[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col3[i]).css('background-color') === yel && $(col3[i + 1]).css('background-color') === yel && $(col3[i + 2]).css('background-color') === yel & $(col3[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };
    for (i = 0; i < col4.length; i++) {

      if ($(col4[i]).css('background-color') === red && $(col4[i + 1]).css('background-color') === red && $(col4[i + 2]).css('background-color') === red & $(col4[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col4[i]).css('background-color') === yel && $(col4[i + 1]).css('background-color') === yel && $(col4[i + 2]).css('background-color') === yel & $(col4[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };
    for (i = 0; i < col5.length; i++) {

      if ($(col5[i]).css('background-color') === red && $(col5[i + 1]).css('background-color') === red && $(col5[i + 2]).css('background-color') === red & $(col5[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col5[i]).css('background-color') === yel && $(col5[i + 1]).css('background-color') === yel && $(col5[i + 2]).css('background-color') === yel & $(col5[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };
    for (i = 0; i < col6.length; i++) {

      if ($(col6[i]).css('background-color') === red && $(col6[i + 1]).css('background-color') === red && $(col6[i + 2]).css('background-color') === red & $(col6[i + 3]).css('background-color') === red) {

        alert('Red has Won! Refresh to play again.');

      } else if ($(col6[i]).css('background-color') === yel && $(col6[i + 1]).css('background-color') === yel && $(col6[i + 2]).css('background-color') === yel & $(col6[i + 3]).css('background-color') === yel) {
        alert('Yellow has Won! Refresh to play again.');
      }

    };

  }
};
