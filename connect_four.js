//console.log('Let\'s do this thing');

window.onload = function() {
  newBoard = new Board();
  newBoard.checkWin();
  newBoard.makeCells();
  newBoard.changeColorRed();
  newBoard.changeColorBlack();
};

var Cell = function() {
  this.value = null;
  this.isPlayable = true;
};


var Board = function() {
  this.gameboard = [];
  this.currentPlayer = 1;

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
      this.gameboard.push(rowArray);
      $('.entireBoard').append($(rowDiv));
    };
  };

  this.changeColorRed = function() {
    $('.cell').on('click', function() {
      index = this.id.split('-')
      cell = newBoard.gameboard[index[0]][index[1]]
      if (newBoard.currentPlayer === 1 && cell.isPlayable) {
        cell.value = 'red'
        $(this).css('background-color', 'red')
        cell.isPlayable = false;
        newBoard.currentPlayer *= -1;
        newBoard.checkWin();
      }
    })
  };

  this.changeColorBlack = function() {

    $('.cell').on('click', function() {
      var index = this.id.split('-')
      var cell = newBoard.gameboard[index[0]][index[1]]
      if (newBoard.currentPlayer === -1 && cell.isPlayable) {
        cell.value = 'black'
        $(this).css('background-color', 'black')
        cell.isPlayable = false;
        newBoard.currentPlayer *= -1;
        newBoard.checkWin();
      }
    })
  }


  this.checkWin = function() {

    var row0 = $("div[id^='0']");
    var row1 = $("div[id^='1']");
    var row2 = $("div[id^='2']");
    var row3 = $("div[id^='3']");
    var row4 = $("div[id^='4']");
    var row5 = $("div[id^='5']");
    var col0 = $("[id*='-0']");
    var col1 = $("[id*='-1']");
    var col2 = $("[id*='-2']");
    var col3 = $("[id*='-3']");
    var col4 = $("[id*='-4']");
    var col5 = $("[id*='-5']");
    var col6 = $("[id*='-6']");

    var black = 'rgb(0, 0, 0)'
    var red = 'rgb(255, 0, 0)';

    for (i = 0; i < row5.length; i++) {

      if ($(row5[i]).css('background-color') === red && $(row5[i + 1]).css('background-color') === red && $(row5[i + 2]).css('background-color') === red & $(row5[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row5[i]).css('background-color') === black && $(row5[i + 1]).css('background-color') === black && $(row5[i + 2]).css('background-color') === black & $(row5[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };
    for (i = 0; i < row4.length; i++) {

      if ($(row4[i]).css('background-color') === red && $(row4[i + 1]).css('background-color') === red && $(row4[i + 2]).css('background-color') === red & $(row4[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row4[i]).css('background-color') === black && $(row4[i + 1]).css('background-color') === black && $(row4[i + 2]).css('background-color') === black & $(row4[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };


    for (i = 0; i < row3.length; i++) {

      if ($(row3[i]).css('background-color') === red && $(row3[i + 1]).css('background-color') === red && $(row3[i + 2]).css('background-color') === red & $(row3[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row3[i]).css('background-color') === black && $(row3[i + 1]).css('background-color') === black && $(row3[i + 2]).css('background-color') === black & $(row3[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < row2.length; i++) {

      if ($(row2[i]).css('background-color') === red && $(row2[i + 1]).css('background-color') === red && $(row2[i + 2]).css('background-color') === red & $(row2[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row2[i]).css('background-color') === black && $(row2[i + 1]).css('background-color') === black && $(row2[i + 2]).css('background-color') === black & $(row2[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < row1.length; i++) {

      if ($(row1[i]).css('background-color') === red && $(row1[i + 1]).css('background-color') === red && $(row1[i + 2]).css('background-color') === red & $(row1[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row1[i]).css('background-color') === black && $(row1[i + 1]).css('background-color') === black && $(row1[i + 2]).css('background-color') === black & $(row1[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < row0.length; i++) {

      if ($(row0[i]).css('background-color') === red && $(row0[i + 1]).css('background-color') === red && $(row0[i + 2]).css('background-color') === red & $(row0[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(row0[i]).css('background-color') === black && $(row0[i + 1]).css('background-color') === black && $(row0[i + 2]).css('background-color') === black & $(row0[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < col0.length; i++) {

      if ($(col0[i]).css('background-color') === red && $(col0[i + 1]).css('background-color') === red && $(col0[i + 2]).css('background-color') === red & $(col0[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col0[i]).css('background-color') === black && $(col0[i + 1]).css('background-color') === black && $(col0[i + 2]).css('background-color') === black & $(col0[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < col1.length; i++) {

      if ($(col1[i]).css('background-color') === red && $(col1[i + 1]).css('background-color') === red && $(col1[i + 2]).css('background-color') === red & $(col1[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col1[i]).css('background-color') === black && $(col1[i + 1]).css('background-color') === black && $(col1[i + 2]).css('background-color') === black & $(col1[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

    for (i = 0; i < col2.length; i++) {

      if ($(col2[i]).css('background-color') === red && $(col2[i + 1]).css('background-color') === red && $(col2[i + 2]).css('background-color') === red & $(col2[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col2[i]).css('background-color') === black && $(col2[i + 1]).css('background-color') === black && $(col2[i + 2]).css('background-color') === black & $(col2[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };
    for (i = 0; i < col3.length; i++) {

      if ($(col3[i]).css('background-color') === red && $(col3[i + 1]).css('background-color') === red && $(col3[i + 2]).css('background-color') === red & $(col3[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col3[i]).css('background-color') === black && $(col3[i + 1]).css('background-color') === black && $(col3[i + 2]).css('background-color') === black & $(col3[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };
    for (i = 0; i < col4.length; i++) {

      if ($(col4[i]).css('background-color') === red && $(col4[i + 1]).css('background-color') === red && $(col4[i + 2]).css('background-color') === red & $(col4[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col4[i]).css('background-color') === black && $(col4[i + 1]).css('background-color') === black && $(col4[i + 2]).css('background-color') === black & $(col4[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };
    for (i = 0; i < col5.length; i++) {

      if ($(col5[i]).css('background-color') === red && $(col5[i + 1]).css('background-color') === red && $(col5[i + 2]).css('background-color') === red & $(col5[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col5[i]).css('background-color') === black && $(col5[i + 1]).css('background-color') === black && $(col5[i + 2]).css('background-color') === black & $(col5[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };
    for (i = 0; i < col6.length; i++) {

      if ($(col6[i]).css('background-color') === red && $(col6[i + 1]).css('background-color') === red && $(col6[i + 2]).css('background-color') === red & $(col6[i + 3]).css('background-color') === red) {

        alert('Color Red has Won!')

      } else if ($(col6[i]).css('background-color') === black && $(col6[i + 1]).css('background-color') === black && $(col6[i + 2]).css('background-color') === black & $(col6[i + 3]).css('background-color') === black) {
        alert('Color Black has Won!')
      }

    };

  }
};
