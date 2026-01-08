// logic to get computer choice
// function getComputerChoice() {
//   const choices = ["Rock", "Paper", "Scissors"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// console.log(getComputerChoice());


// logic to get human choice
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getHumanChoice() {
  rl.question("What do you choose? ", (choice) => {
    console.log("You chose:", choice);
    rl.close();
  });
}

getHumanChoice();

