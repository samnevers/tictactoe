// Don't forget that anything that interacts with JS DOM elements needs to sit inside the Document Ready function
$(document).ready(function() {

// Creating gameboard
  // reset function?

  var $gameboard = $(".gameboard");

// DETERMINE WHO'S TURN IT IS
  // where do we start?
    // turn 0
    // player 1
    // marker x
    // there should be only 9 turns
  var turn = 0;
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

  $gameboard.on("click", nextTurn);

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

// let's try this:
  // make the squares into an object, so you can call a singular function on them to make the code DRY

// first, let's check if the square is empty
  // if square is empty, then a player can move there
    // then we have to allow them to mark the box
    // by checking which player/which marker to place
    // add to the turn count as the player's turn has been completed
  // else, alert user that this is an invalid move and to try again
$squares.on("click", function (){
  console.log(this.text);
  if ($(this).text() === undefined) {
    $(this).text(marker);
    turn += 1;
    if (marker === "*") {
      $(this).addClass(tokenX);
    } else {
      $(this).addClass(tokenO);
    }
  } else {
    alert("Sorry, choose another square.");
  }
});

// note to self: work out why the above isn't leaving a mark
  // then, start tracking the moves in your array
    // so you can then start reviewing game logic

  // $squareA.one('click', function () {
  //   var thisSquare = $squareA;
  //   if (token === "*") {
  //     $(thisSquare).append("<p class='tokenX'>*</p>");
  //     console.log("P1 clicked Square A");
  //     gameGrid[0][0] = "*";
  //   }
  //   else {
  //     $(thisSquare).append("<p class='tokenO'>o</p>");
  //     console.log("P2 clicked Square A");
  //     gameGrid[0][0] = "o";
  //   }
  // });
  //

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

// NEXT STEP:
  // refine click listeners to be more DRY - use a function - kinda done
  // check game state - use a function
