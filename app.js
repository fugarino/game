//QuerySelectors
let user = 0;
let computer = 0;
const result = document.querySelector(".results");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//Functions
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randumNumber = Math.floor(Math.random() * 3);
  return choices[randumNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
}

function main() {
  rock.addEventListener("click", () => {
    game("r");
  });
  paper.addEventListener("click", () => {
    game("p");
  });
  scissors.addEventListener("click", () => {
    game("s");
  });
}
main();
