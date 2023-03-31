// Selecting all necessary elements from the HTML document
const teamOneThrows = document.querySelector("#teamone-numthrows");
const teamOneHits = document.querySelector("#teamone-numhits");
const teamTwoThrows = document.querySelector("#teamtwo-numthrows");
const teamTwoHits = document.querySelector("#teamtwo-numhits");
// const resetButton = document.querySelector("#reset-button");
const resetButton = document.getElementById("reset-button");
const numResets = document.querySelector("#num-resets");
const winner = document.getElementById(winner);
// const winner = document.querySelector("#winner");
const teamOneThrowButton = document.getElementById("teamone-throw-button");
// const teamOneThrowButton = document.querySelector("#teamone-throw-button");
const teamTwoThrowButton = document.getElementById("teamtwo-throw-button");
// const teamTwoThrowButton = document.querySelector("#teamtwo-throw-button");
const targetImage = document.querySelector("#image1");
const targetHitImage = document.querySelector("#image2");

// Set initial values for variables to track number of throws and hits
let teamOneThrowCount = 0;
let teamOneHitCount = 0;
let teamTwoThrowCount = 0;
let teamTwoHitCount = 0;
let resetCount = 0;

// Function to calculate a random chance of a successful throw (a hit)
function calculateHit() {
  return Math.random() >= 0.5;
}

// Function to handle throw button clicks for both teams
function handleThrowButtonClick(teamThrows, teamHits) {
  return function () {
    // Increase the number of throws for the team
    teamThrows.innerHTML = ++teamThrows.innerHTML;

    // Calculate if the throw was a hit or not
    const isHit = calculateHit();
    if (isHit) {
      // If the throw was a hit, increase the number of hits for the team
      teamHits.innerHTML = ++teamHits.innerHTML;

      // Show the target hit image for 1 second before switching back to the normal target image
      targetHitImage.classList.remove("hide");
      setTimeout(() => {
        targetHitImage.classList.add("hide");
      }, 1000);
    }
  };
}

// Function to handle reset button clicks
function handleResetButtonClick() {
  // Increase the reset count
  numResets.innerHTML = ++resetCount;

  // Record the total number of hits for each team
  const teamOneTotalHits = parseInt(teamOneHits.innerHTML);
  const teamTwoTotalHits = parseInt(teamTwoHits.innerHTML);

  // Determine the winner or if it's a tie and display the appropriate message
  if (teamOneTotalHits > teamTwoTotalHits) {
    winner.innerHTML = "Thrower 1 wins!";
  } else if (teamOneTotalHits < teamTwoTotalHits) {
    winner.innerHTML = "Thrower 2 wins!";
  } else {
    winner.innerHTML = "It's a tie!";
  }

  // Reset all the throw and hit counts to zero
  teamOneThrowCount = 0;
  teamOneHitCount = 0;
  teamTwoThrowCount = 0;
  teamTwoHitCount = 0;
  teamOneThrows.innerHTML = 0;
  teamOneHits.innerHTML = 0;
  teamTwoThrows.innerHTML = 0;
  teamTwoHits.innerHTML = 0;
}

// Attach click event listeners to the throw buttons for both teams
teamOneThrowButton.addEventListener(
  "click",
  handleThrowButtonClick(teamOneThrows, teamOneHits)
);
teamTwoThrowButton.addEventListener(
  "click",
  handleThrowButtonClick(teamTwoThrows, teamTwoHits)
);

// Attach click event listener to the reset button
resetButton.addEventListener("click", handleResetButtonClick);
