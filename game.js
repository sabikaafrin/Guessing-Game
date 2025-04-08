let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userNumber = parseInt(document.getElementById("userInput").value);
  let message = document.getElementById("message");
  let attemptsDisplay = document.getElementById("attempts");

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    message.innerHTML = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (userNumber === secretNumber) {
    message.innerHTML  = "Correct! Right Guess. The number was " + secretNumber;
    attemptsDisplay.innerHTML  = "Attempts tried " + attempts + " times.";
  }

  else if (userNumber > secretNumber) {
    message.innerHTML  = "Too high! Try again.";
    attemptsDisplay.innerHTML  = "Attempts tried: " + attempts;
  } 
  
  else {
    message.innerHTML  = "Too low! Try again.";
    attemptsDisplay.innerHTML  = "Attempts tried: " + attempts;
  }

  document.getElementById("userInput").value = '';
}

function resetGame() {
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = '';
  document.getElementById('userInput').value = '';
}
