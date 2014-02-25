// Generated by CoffeeScript 1.7.1
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $(function() {
    var WIN_PATTERNS, checkForWin, clearBoard, counter, getCellNumber, isEmpty, markCell, resetGame;
    counter = 0;
    WIN_PATTERNS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    isEmpty = function(cell) {
      return !cell.text();
    };
    getCellNumber = function(cell) {
      return parseInt(cell.data('index'));
    };
    clearBoard = function() {
      $('.board-cell').text('');
      $('.board-cell').removeClass('o');
      $('.board-cell').removeClass('x');
      return counter = 0;
    };
    resetGame = function() {
      clearBoard();
      $('#gameboard').hide();
      return $('#start-game').fadeIn(500);
    };
    checkForWin = function(cell) {
      var board, i, j, loseCounter, p, patternsToTest, win, xoString, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
      win = '';
      board = ($('.board-cell').map(function(idx, el) {
        return $(el).text();
      })).get();
      patternsToTest = WIN_PATTERNS.filter(function(pattern) {
        return __indexOf.call(pattern, cell) >= 0;
      });
      for (_i = 0, _len = patternsToTest.length; _i < _len; _i++) {
        p = patternsToTest[_i];
        if ((('' !== (_ref1 = board[p[0]]) && _ref1 === (_ref = board[p[1]])) && _ref === board[p[2]])) {
          win = board[p[0]];
        }
      }
      loseCounter = 0;
      for (_j = 0, _len1 = WIN_PATTERNS.length; _j < _len1; _j++) {
        i = WIN_PATTERNS[_j];
        xoString = ' ';
        for (_k = 0, _len2 = i.length; _k < _len2; _k++) {
          j = i[_k];
          xoString += board[j];
        }
        if ((xoString.indexOf('x') > -1) && (xoString.indexOf('o') > -1)) {
          loseCounter += 1;
        }
        console.log(xoString + '**' + i + '**' + loseCounter);
      }
      if (loseCounter === 8) {
        alert('UNWINNABLE GAME');
        resetGame();
      }
      if (win !== '') {
        alert(win + ' won!');
        return resetGame();
      } else if (counter > 8) {
        alert('EVERYONE LOSES');
        return resetGame();
      }
    };
    markCell = function(cell, mark) {
      cell.text(mark);
      cell.addClass(mark);
      counter += 1;
      if (counter > 4) {
        return checkForWin(getCellNumber(cell));
      }
    };
    $('#start-game').on('click', function(e) {
      clearBoard();
      $(this).hide();
      return $('#gameboard').fadeIn(500);
    });
    return $('.board-cell').on('click', function(e) {
      var cell, mark;
      cell = $(this);
      mark = counter % 2 === 0 ? 'x' : 'o';
      if (isEmpty(cell)) {
        return markCell(cell, mark);
      }
    });
  });

}).call(this);

//# sourceMappingURL=game.map
