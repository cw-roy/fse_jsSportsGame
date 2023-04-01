let clickCount1 = 0;
let randomCount1 = 0;
let clickCount2 = 0;
let randomCount2 = 0;
let resetCount = 0;

function incrementCounts1() {
  clickCount1++;
  document.getElementById("clickCount1-el").textContent = clickCount1;

  const randomNum = Math.floor(Math.random() * 2);
  randomCount1 += randomNum;
  document.getElementById("randomCount1-el").textContent = randomCount1;
}

function incrementCounts2() {
  clickCount2++;
  document.getElementById("clickCount2-el").textContent = clickCount2;

  const randomNum = Math.floor(Math.random() * 2);
  randomCount2 += randomNum;
  document.getElementById("randomCount2-el").textContent = randomCount2;
}

function resetCounts() {
  const randomCount1Prev = randomCount1;
  const randomCount2Prev = randomCount2;

  clickCount1 = 0;
  randomCount1 = 0;
  clickCount2 = 0;
  randomCount2 = 0;
  resetCount++;

  document.getElementById("clickCount1-el").textContent = clickCount1;
  document.getElementById("randomCount1-el").textContent = randomCount1;
  document.getElementById("clickCount2-el").textContent = clickCount2;
  document.getElementById("randomCount2-el").textContent = randomCount2;
  document.getElementById("resetCount-el").textContent = resetCount;


  let message;
  if (randomCount1Prev > randomCount2Prev) {
    message = "Thrower 1 wins!";
  } else if (randomCount2Prev > randomCount1Prev) {
    message = "Thrower 2 wins!";
  } else {
    message = "It's a tie!";
  }
  alert(message);
}

document.getElementById("myButton").addEventListener("click", incrementCounts1);
document.getElementById("myButton2").addEventListener("click", incrementCounts2);
document.getElementById("resetButton").addEventListener("click", resetCounts);
