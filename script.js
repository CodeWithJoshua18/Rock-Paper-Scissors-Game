const readline = require("readline");

// computer choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// scores
let humanScore = 0;
let computerScore = 0;

// play round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It is a tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win");
    humanScore++;
  } else {
    console.log("You lose");
    computerScore++;
  }

  console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you choose? ", (humanChoice) => {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  rl.close();
});
