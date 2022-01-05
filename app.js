//QuerySelectors
let userScore = 0;
let computerScore = 0;
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

//Functions
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function conversion(letter) {
  if (letter == "r") {
    return "Rock";
  } else if (letter == "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  user.innerHTML = userScore;
  result.innerHTML = `${conversion(userChoice)} beats ${conversion(
    computerChoice
  )}. You Won!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 200);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computer.innerHTML = computerScore;
  result.innerHTML = `${conversion(userChoice)} loses to ${conversion(
    computerChoice
  )}. You Lost!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 200);
}
function tie(userChoice, computerChoice) {
  result.innerHTML = `${conversion(userChoice)} equals ${conversion(
    computerChoice
  )}. You tied!`;
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 200);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
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
