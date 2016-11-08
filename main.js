// MAIN VARIABLES
var playerOne;
var playerTwo;
var token;

// Don't forget that anything that interacts with JS DOM elements needs to sit inside the Document Ready function
$(document).ready(function() {

// Creating gameboard
  // You need to define the gameboard so you can access it X
  // You need to make sure the gameboard eg. the divs within are all clear at the start of the game
  // You need to reset the gameboard when

  var $gameboard = $(".gameboard");

// DETERMINE WHO'S TURN IT IS
  var count = 0;

  var whichPlayer = function() {
    console.log("you clicked the gameboard");
    count += 1;
    console.log(count);
    if (count > 9) {
      console.log("game over");
    } else if(count % 2 === 0) {
      playerOne = false;
      playerTwo = true;
      token = "o";
      console.log("Your turn Player One");
      return token;
    } else {
      playerOne = true;
      playerTwo = false;
      token = "*";
      console.log("Your turn Player Two");
      return token;
    }
    return count;
  };

  $gameboard.on("click", whichPlayer);

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

console.log($squareB, $squareC, $squareD, $squareE, $squareF, $squareG, $squareH, $squareI);


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
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square A");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square A");
    }
  });

  $squareB.one('click', function () {
    var thisSquare = $squareB;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square B");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square B");
    }
  });

  $squareC.one('click', function () {
    var thisSquare = $squareC;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square C");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square C");
    }
  });

  $squareD.one('click', function () {
    var thisSquare = $squareD;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square D");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square D");
    }
  });

  $squareE.one('click', function () {
    var thisSquare = $squareE;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square E");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square E");
    }
  });

  $squareF.one('click', function () {
    var thisSquare = $squareF;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square F");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square F");
    }
  });

  $squareG.one('click', function () {
    var thisSquare = $squareG;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square G");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square G");
    }
  });

  $squareH.one('click', function () {
    var thisSquare = $squareH;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square H");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square H");
    }
  });

  $squareI.one('click', function () {
    var thisSquare = $squareI;
    if (playerOne === true) {
      $(thisSquare).append("<p class='tokenX'>*</p>");
      console.log("P2 clicked Square I");
    }
    else {
      $(thisSquare).append("<p class='tokenO'>o</p>");
      console.log("P1 clicked Square I");
    }
  });

});
