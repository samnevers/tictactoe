// HEADER ANIMATION?

// Don't forget that anything that interacts with JS DOM elements needs to sit inside the Document Ready function
$(document).ready(function() {

// Creating gameboard
  // reset function?

  var $gameboard = $(".gameboard");
  var $newGame = $(".newGame");


// DETERMINE WHO'S TURN IT IS
  var marker = "*";

var nextTurn = function() {
  if (marker === "*") {
    marker = "o";
    console.log("It's your turn player 2");
    return marker;
  } else {
    marker = "*";
    console.log("It's your turn player 1");
    return marker;
  }
};

// ACCESSING THE SQUARES

var $squares = $("div.square");

var $squareA = $squares.eq(0);
var $squareB = $squares.eq(1);
var $squareC = $squares.eq(2);
var $squareD = $squares.eq(3);
var $squareE = $squares.eq(4);
var $squareF = $squares.eq(5);
var $squareG = $squares.eq(6);
var $squareH = $squares.eq(7);
var $squareI = $squares.eq(8);


// reset board

  var resetGame = function() {
    console.log($squares);
    console.log($squares.text);
    $squares.text("");
    console.log($squares.text);
    $squares.removeClass("tokenX");
    $squares.removeClass("tokenO");
    marker = "*";
  };


// DEFINING RULES FOR WINNING
  // FIRST, DEFINING/CHECKING FOR A WIN

  var checkSquares = function($squareOne, $squareTwo, $squareThree) {
    var squareOne = $squareOne.text();
    var squareTwo = $squareTwo.text();
    var squareThree = $squareThree.text();

    if ((squareOne === squareTwo) && (squareTwo === squareThree)) {
      if (squareOne === "*") {
        console.log("Congratulations Player *!");
        return "*";
      } else if (squareOne === "o") {
        console.log("Congratulations Player o!");
        return "o";
      }
    }
    return null;
  };


  // SECOND, DEFINING THE DIFFERENT WAYS TO WIN

var rowWin = function() {
  var topRow = checkSquares($squares.eq(0), $squares.eq(3), $squares.eq(6));
  console.log(topRow);
  var midRow = checkSquares($squares.eq(1), $squares.eq(4), $squares.eq(7));
  console.log(midRow);
  var bottomRow = checkSquares($squares.eq(2), $squares.eq(5), $squares.eq(8));
  console.log(bottomRow);
  return topRow || (midRow || bottomRow);
};

console.log(rowWin());

var colWin = function() {
  var leftCol = checkSquares($squares.eq(0), $squares.eq(1), $squares.eq(2));
  console.log(leftCol);
  var midCol = checkSquares($squares.eq(3), $squares.eq(4), $squares.eq(5));
  console.log(midCol);
  var bottomCol = checkSquares($squares.eq(6), $squares.eq(7), $squares.eq(8));
  console.log(bottomCol);
  return leftCol || (midCol || bottomCol);
};

console.log(colWin());

var diagonalWin = function() {
  var leftToRight = checkSquares($squares.eq(0), $squares.eq(4), $squares.eq(8));
  console.log(leftToRight);
  var rightToLeft = checkSquares($squares.eq(2), $squares.eq(4), $squares.eq(6));
  console.log(rightToLeft);
  return leftToRight || rightToLeft;
};

console.log(diagonalWin());


  // THIRD, RUNNING THE ACTUAL FUNCTIONS

var checkWinner = function() {
  return rowWin() || (colWin() || diagonalWin());
};


// MARKING THE SQUARES WHEN PLAYERS CLICK
  // CHECKING ON EACH CLICK FOR WINNER

var markSquare = function () {
  if ($(this).text() === "*" || $(this).text() === "o") {
    console.log($(this).text());
    alert("Sorry, choose another square.");
  } else {
    $(this).text(marker);
    console.log($(this).text());
    console.log($(this));
    if (marker === "*") {
      $(this).addClass("tokenX");
      var gameWon = checkWinner();
      if (gameWon) {
        alert("Congratulations, player " + marker + "! You win!");
        } else {
        nextTurn();
      }
    } else {
      $(this).addClass("tokenO");
      var gameWon = checkWinner();
      if (gameWon) {
        alert("Congratulations, player " + marker + "! You win!");
        } else {
        nextTurn();
      }
    }
  }
};

// THE ACTUAL ON CLICK EVENT LISTENER

$squares.on("click", markSquare);

$(".newGame").on("click", resetGame);

});
