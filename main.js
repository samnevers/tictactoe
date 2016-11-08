// MAIN VARIABLES
var playerOne;
var playerTwo;
var token;

// Don't forget that anything that interacts with JS DOM elements needs to sit inside the Document Ready function
$(document).ready(function() {

// Creating gameboard
  // You need to define the gameboard so you can access it X
  // You need to make sure the gameboard eg. the divs within are all clear at the start of the game
  // OPTIONAL: reset the gameboard to start a new game

  var $gameboard = $(".gameboard");

// DETERMINE WHO'S TURN IT IS
  // where do we start?
    // turn 0
    // player 1
    // marker x
  var turn = 0;
  var marker = "*";

  // is there an easier way to change turns?

var nextTurn = function() {
  turn += 1;
  console.log(turn);
  if (marker === "*") {
    marker = "o";
    console.log("It's your turn player 2");
    return marker;
  } else {
    marker = "*";
    console.log("It's your turn player 1");
    return marker;
  }
  return turn;
};

  // var whichMarker = function() {
  //   console.log("you clicked the gameboard");
  //   turn += 1;
  //   console.log(turn);
  //   if (turn > 9) {
  //     console.log("game over");
  //   } else if(count % 2 === 0) {
  //     playerOne = false;
  //     playerTwo = true;
  //     token = "o";
  //     console.log("Your turn Player One");
  //     return token;
  //   } else {
  //     playerOne = true;
  //     playerTwo = false;
  //     token = "*";
  //     console.log("Your turn Player Two");
  //     return token;
  //   }
  //   return turn;
  // };

  $gameboard.on("click", nextTurn);

// defining the spaces - linking the DOM to values
  // eg. if a player puts a cross in squareA, how do we reflect this change?
    // visually on the gameboard
    // and in stored game data logic ie. to keep track of who wins

// linked to DOM via JQ
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

if ($squares.eq(0) === $squares.eq(2)) {
  console.log("true");
} else {
  console.log("false");
}
// assign event listeners to these...
  // First define your functions, esp. as these are recurring

  // var placeTokenOne = function () {
  //   console.log("Player one has made their move");
  //   console.log(this);
  //   $(thisSquare).append("<p>*</p>");
  //   $("p").addClass("tokenX");
  // };
  //
  // var placeTokenTwo = function () {
  //   console.log("Player two has made their move");
  //   console.log(thisSquare); // this equals window
  //   $(thisSquare).append("<p>o</p>");
  //   $(thisSquare).addClass("tokenO");
  // };
// Not sure how to do the above to make it less DRY as the squares change

  var testFunction = function () {
    console.log("this is working thank god");
  };

  $squareA.one('click', function () {
    var thisSquare = $squareA;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square A");
      gameGrid[0][0] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square A");
      gameGrid[0][0] = "o";
    }
  });

  $squareB.one('click', function () {
    var thisSquare = $squareB;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square B");
      gameGrid[1][0] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square B");
      gameGrid[1][0] = "o";
    }
  });

  $squareC.one('click', function () {
    var thisSquare = $squareC;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square C");
      gameGrid[2][0] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square C");
      gameGrid[2][0] = "o";
    }
  });

  $squareD.one('click', function () {
    var thisSquare = $squareD;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square D");
      gameGrid[0][1] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square D");
      gameGrid[0][1] = "o";
    }
  });

  $squareE.one('click', function () {
    var thisSquare = $squareE;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square E");
      gameGrid[1][1] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square E");
      gameGrid[1][1] = "o";
    }
  });

  $squareF.one('click', function () {
    var thisSquare = $squareF;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square F");
      gameGrid[2][1] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square F");
      gameGrid[2][1] = "o";
    }
  });

  $squareG.one('click', function () {
    var thisSquare = $squareG;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square G");
      gameGrid[0][2] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square G");
      gameGrid[0][2] = "o";
    }
  });

  $squareH.one('click', function () {
    var thisSquare = $squareH;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square H");
      gameGrid[1][2] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square H");
      gameGrid[1][2] = "o";
    }
  });

  $squareI.one('click', function () {
    var thisSquare = $squareI;
    if (token === "*") {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P1 clicked Square I");
      gameGrid[2][2] = "*";
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P2 clicked Square I");
      gameGrid[2][2] = "o";
    }
  });

// GAME LOGIC - HOW DO DIS
  // is the square empty?
  // who's turn it is it
  // has anyone won yet?

// win conditions

});

// this is a 2d array
var gameGrid = [
  ["","",""],
  ["","",""],
  ["","",""]
];

// we need to console log the array, and then run if else statements to check if the game has been won 
