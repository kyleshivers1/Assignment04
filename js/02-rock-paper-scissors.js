//Computer Choice
let compChoice;
randomNum = Math.random();
if (randomNum < 0.33) {
  compChoice = "rock";
} else if (randomNum > 0.33 && randomNum < 0.66) {
  compChoice = "paper";
} else {
  compChoice = "scissors";
}

//Player Choice
let playerChoice = prompt(`Rock, paper, or scissors?`);

//Game
if (
  (playerChoice == "rock" || playerChoice == "Rock") &&
  compChoice === "paper"
) {
  alert(`Paper beats rock. You lose!`);
} else if (
  (playerChoice == "rock" || playerChoice == "Rock") &&
  compChoice === "scissors"
) {
  alert(`Rock beats scissors. You win!`);
} else if (
  (playerChoice == "rock" || playerChoice == "Rock") &&
  compChoice === "rock"
) {
  alert(`You both chose rock! Reload to play again.`);
} else if (
  (playerChoice == "paper" || playerChoice == "Paper") &&
  compChoice === "rock"
) {
  alert(`Paper beats rock. You win!`);
} else if (
  (playerChoice == "paper" || playerChoice == "Paper") &&
  compChoice === "scissors"
) {
  alert(`Scissors beats paper. You lose!`);
} else if (
  (playerChoice == "paper" || playerChoice == "Paper") &&
  compChoice === "paper"
) {
  alert(`You both chose paper! Reload to play again.`);
} else if (
  (playerChoice == "scissors" || playerChoice == "Scissors") &&
  compChoice === "rock"
) {
  alert(`Rock beats scissors. You lose!`);
} else if (
  (playerChoice == "scissors" || playerChoice == "Scissors") &&
  compChoice === "paper"
) {
  alert(`Scissors beats paper. You win!`);
} else if (
  (playerChoice == "scissors" || playerChoice == "Scissors") &&
  compChoice === "scissors"
) {
  alert(`You both chose scissors! Reload ot play again.`);
} else {
  alert(`Please reload and enter rock, paper, or scissors`);
}
