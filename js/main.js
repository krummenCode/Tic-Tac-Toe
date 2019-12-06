// Set variables for player names
var p1;
var p2;

/* No winner var set to true if a player wins, change to false*/
var NoWinner = true;

// Create a function to ask for player names and assign to variables
function GetPlayerNames() {
   p1 = prompt("Please enter your name player 1.", "Player 1");
   p2 = prompt("Enter your name player 2.", "Player 2");
  if (p1 != null && p2 != null) {
    document.getElementById("player1").innerHTML = "P1: " + p1;
    document.getElementById("player2").innerHTML = "P2: " + p2;
  }
}


// Create variable that gets placed into tic tac toe block for player press
// Player 1 goes first so they are X
var mark = "X";
// Change mark between X and O with each button click
function SwitchMark() {
  if(mark == "X") {
    return mark = "O";
  }
  if(mark == "O") {
    return mark = "X";
  }
}

// Create function that is called with every button press from players
/* The function places a mark(X or O) in players choosen button,
calls switch mark, disables players button press and checks for winner or draw*/
// disable button so players cannot change eachothers mark
function XO(btn) {
  document.getElementById(btn.id).childNodes[1].innerHTML = mark;
  SwitchMark();
  document.getElementById(btn.id).setAttribute("disabled", true);
  IsWinner();
  IsDraw();
}

// Checks evey single win possibilty for X and O then alerts corresponding winner and set NoWinner to false
function IsWinner() {
/* X is winner */
  // Horizontal
  if(document.getElementById("1").childNodes[1].innerHTML == "X" &&
    document.getElementById("2").childNodes[1].innerHTML == "X" &&
    document.getElementById("3").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("4").childNodes[1].innerHTML == "X" &&
    document.getElementById("5").childNodes[1].innerHTML == "X" &&
    document.getElementById("6").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("7").childNodes[1].innerHTML == "X" &&
    document.getElementById("8").childNodes[1].innerHTML == "X" &&
    document.getElementById("9").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  // Vertical
  if(document.getElementById("1").childNodes[1].innerHTML == "X" &&
    document.getElementById("4").childNodes[1].innerHTML == "X" &&
    document.getElementById("7").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("2").childNodes[1].innerHTML == "X" &&
    document.getElementById("5").childNodes[1].innerHTML == "X" &&
    document.getElementById("8").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("3").childNodes[1].innerHTML == "X" &&
    document.getElementById("6").childNodes[1].innerHTML == "X" &&
    document.getElementById("9").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  // Diagonal
  if(document.getElementById("1").childNodes[1].innerHTML == "X" &&
    document.getElementById("5").childNodes[1].innerHTML == "X" &&
    document.getElementById("9").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("3").childNodes[1].innerHTML == "X" &&
    document.getElementById("5").childNodes[1].innerHTML == "X" &&
    document.getElementById("7").childNodes[1].innerHTML == "X") {
    alert( p1 + " is the Winner!!");
    NoWinner = false;
  }
/* O is winner */
  // Horizontal
  if(document.getElementById("1").childNodes[1].innerHTML == "O" &&
    document.getElementById("2").childNodes[1].innerHTML == "O" &&
    document.getElementById("3").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("4").childNodes[1].innerHTML == "O" &&
    document.getElementById("5").childNodes[1].innerHTML == "O" &&
    document.getElementById("6").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("7").childNodes[1].innerHTML == "O" &&
    document.getElementById("8").childNodes[1].innerHTML == "O" &&
    document.getElementById("9").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  // Vertical
  if(document.getElementById("1").childNodes[1].innerHTML == "O" &&
    document.getElementById("4").childNodes[1].innerHTML == "O" &&
    document.getElementById("7").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
  }
  if(document.getElementById("2").childNodes[1].innerHTML == "O" &&
    document.getElementById("5").childNodes[1].innerHTML == "O" &&
    document.getElementById("8").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("3").childNodes[1].innerHTML == "O" &&
    document.getElementById("6").childNodes[1].innerHTML == "O" &&
    document.getElementById("9").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  // Diagonal
  if(document.getElementById("1").childNodes[1].innerHTML == "O" &&
    document.getElementById("5").childNodes[1].innerHTML == "O" &&
    document.getElementById("9").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
  if(document.getElementById("3").childNodes[1].innerHTML == "O" &&
    document.getElementById("5").childNodes[1].innerHTML == "O" &&
    document.getElementById("7").childNodes[1].innerHTML == "O") {
    alert( p2 + " is the Winner!!");
    NoWinner = false;
  }
}

// Check if every single button is disabled and NoWinner == true, if so its a draw
function IsDraw() {
  if (document.getElementById("1").disabled == true &&
    document.getElementById("2").disabled == true &&
    document.getElementById("3").disabled == true &&
    document.getElementById("4").disabled == true &&
    document.getElementById("5").disabled == true &&
    document.getElementById("6").disabled == true &&
    document.getElementById("7").disabled == true &&
    document.getElementById("8").disabled == true &&
    document.getElementById("9").disabled == true &&
    NoWinner == true ) {
    alert("There has been a draw!");
  }
}


// Start game over
function ResetGame() {

  // Reset NoWinner
  NoWinner = true;

  // Reset mark because Player 1 goes first
  mark = "X";

  // Change each buttons innerHTML to blank and set disabled to false
  document.getElementById("1").childNodes[1].innerHTML = "";
  document.getElementById("1").disabled = false;

  document.getElementById("2").childNodes[1].innerHTML = "";
  document.getElementById("2").disabled = false;

  document.getElementById("3").childNodes[1].innerHTML = "";
  document.getElementById("3").disabled = false;

  document.getElementById("4").childNodes[1].innerHTML = "";
  document.getElementById("4").disabled = false;

  document.getElementById("5").childNodes[1].innerHTML = "";
  document.getElementById("5").disabled = false;

  document.getElementById("6").childNodes[1].innerHTML = "";
  document.getElementById("6").disabled = false;

  document.getElementById("7").childNodes[1].innerHTML = "";
  document.getElementById("7").disabled = false;

  document.getElementById("8").childNodes[1].innerHTML = "";
  document.getElementById("8").disabled = false;

  document.getElementById("9").childNodes[1].innerHTML = "";
  document.getElementById("9").disabled = false;
}
