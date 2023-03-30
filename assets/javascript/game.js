// Get references to the HTML elements
const teamOneThrowsEl = document.getElementById("teamone-numthrows");
const teamOneHitsEl = document.getElementById("teamone-numhits");
const teamOneThrowBtn = document.getElementById("teamone-throw-button");
const teamTwoThrowsEl = document.getElementById("teamtwo-numthrows");
const teamTwoHitsEl = document.getElementById("teamtwo-numhits");
const teamTwoThrowBtn = document.getElementById("teamtwo-throw-button");
const numResetsEl = document.getElementById("num-resets");
const resetBtn = document.getElementById("reset-button");
const winnerEl = document.getElementById("winner");

// Set up variables to keep track of game state
let teamOneThrows = 0;
let teamOneHits = 0;
let teamTwoThrows = 0;
let teamTwoHits = 0;
let numResets = 0;

// Define sound effects
const throwSound = new Audio("./assets/sounds/throw.mp3");
const hitSound = new Audio("./assets/sounds/hit.mp3");
const missSound = new Audio("./assets/sounds/miss.mp3");

// Define a function to simulate a throw
function throwHatchet() {
  // There is a 50% chance of a successful throw
  return Math.random() < 0.5;
}

// Define a function to update the HTML with the current game state
function updateGame() {
  teamOneThrowsEl.textContent = teamOneThrows;
  teamOneHitsEl.textContent = teamOneHits;
  teamTwoThrowsEl.textContent = teamTwoThrows;
  teamTwoHitsEl.textContent = teamTwoHits;
  numResetsEl.textContent = numResets;

  const winner = determineWinner();
  if (winner !== "Tie") {
    winnerEl.textContent = `${winner} wins!`;
  } else {
    winnerEl.textContent = "";
  }
}

// Define a function to determine the winner
function determineWinner() {
  if (teamOneHits > teamTwoHits) {
    return "Team 1";
  } else if (teamTwoHits > teamOneHits) {
    return "Team 2";
  } else {
    return "Tie";
  }
}

// Add event listeners to the throw buttons
teamOneThrowBtn.addEventListener("click", function() {
  teamOneThrows++;
  throwSound.play();
  if (throwHatchet()) {
    teamOneHits++;
    hitSound.play();
  } else {
    missSound.play();
  }
  updateGame();
  checkForWinner();
});

teamTwoThrowBtn.addEventListener("click", function() {
  teamTwoThrows++;
  throwSound.play();
  if (throwHatchet()) {
    teamTwoHits++;
    hitSound.play();
  } else {
    missSound.play();
  }
  updateGame();
  checkForWinner();
});

// Add event listener to the reset button
resetBtn.addEventListener("click", function() {
  teamOneThrows = 0;
  teamOneHits = 0;
  teamTwoThrows = 0;
  teamTwoHits = 0;
  numResets++;
  updateGame();
});

// Define a function to check for winner
function checkForWinner() {
  const winner = determineWinner();
  if (winner !== "Tie") {
    winnerEl.textContent = `${winner} wins!`;
  } else {
    winnerEl.textContent = "";
  }
}

// Call resetGame function on page load
resetGame();

// Define a function to reset the game
function resetGame() {
  numResets = 0;
  teamOneThrows = 0;
  teamOneHits = 0;
  teamTwoThrows = 0;
