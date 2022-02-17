// Selectors
let userScore = 0;
let computerScore = 0;
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

// Functions
const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const converter = (letter) => {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const win = (userChoice, computerChoice) => {
  console.log("Won");
  userScore++;
  user.textContent = userScore;
  result.textContent = `${converter(userChoice)} beats ${converter(
    computerChoice
  )}. You Won!`;
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("green-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("green-glow");
  }, 300);
};
const lose = (userChoice, computerChoice) => {
  console.log("Lost");
  computerScore++;
  computer.textContent = computerScore;
  result.textContent = `${converter(userChoice)} loses to ${converter(
    computerChoice
  )}. You Lost!`;
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("red-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("red-glow");
  }, 300);
};
const tie = (userChoice, computerChoice) => {
  console.log("Tie");
  result.textContent = `${converter(userChoice)} equals to ${converter(
    computerChoice
  )}. You Tied!`;
  const userChoiceDiv = document.getElementById(userChoice);
  userChoiceDiv.classList.add("grey-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("grey-glow");
  }, 300);
};

const getUserChoice = (userChoice) => {
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
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
};

// EventListeners
rock.addEventListener("click", () => {
  getUserChoice("r");
});
paper.addEventListener("click", () => {
  getUserChoice("p");
});
scissors.addEventListener("click", () => {
  getUserChoice("s");
});
