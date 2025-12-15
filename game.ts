// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-12-15


// Function for random number
function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// Runs the guessing game
//
function guessingGame(): void {
  const targetNumber: number = generateRandomNumber(1, 10);
  let userGuess: number = -1;

  console.log("Welcome to the Guessing Game!");
  console.log("Guess a number between 1 and 10. Enter 0 to quit.");

  // Loop continues until user guesses correctly or enters 0
  while (userGuess !== 0) {
    userGuess = Number(prompt("Enter your guess:"));

    if (userGuess === 0) {
      console.log("You chose to quit the game.");
      break;
    } else if (userGuess === targetNumber) {
      console.log(`Congratulations! You guessed the correct number: ${targetNumber}`);
      break;
    } else {
      console.log("Try again.");
    }
  }
}

// Start the game
guessingGame();