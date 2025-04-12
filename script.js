const options = ["rock", "paper", "scissors"];
const userChoiceContainer = document.getElementById("user-choice");
const computerChoiceContainer = document.getElementById("computer-choice");
const resultContainer = document.getElementById("result");

function selectRock() {

  const userChioce = "rock";

  userChoiceContainer.innerText = "Your choice : Rock (🪨)";


  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;

  checkWhoWon(userChioce, computersChoice);
}

function selectPaper() {
  userChoiceContainer.innerText = "Your choice : Paper (📄)";

  const userChioce = "paper";


  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;


  checkWhoWon(userChioce, computersChoice);
}

function selectScissors() {

  userChoiceContainer.innerText = "Your choice : Scissors (✂️)";
  
  const userChioce = "scissors";


  const computersChoice = getComputersChoice();

  computerChoiceContainer.innerHTML = "Computers choice : " + computersChoice;


  checkWhoWon(userChioce, computersChoice);
}

function getComputersChoice() {
  let randomIndex = Math.floor(Math.random() * options.length); // 0 , 1, 2
  return options[randomIndex];
}

function checkWhoWon(usersChioce, computersChoice) {
  if (
    (usersChioce === "rock" && computersChoice === "scissors") ||
    (usersChioce === "paper" && computersChoice === "rock") ||
    (usersChioce === "scissors" && computersChoice === "paper")
  ) {
    resultContainer.innerHTML = "Result: Cong. You won!!";
  } else if (
    (computersChoice === "rock" && usersChioce === "scissors") ||
    (computersChoice === "paper" && usersChioce === "rock") ||
    (computersChoice === "scissors" && usersChioce === "paper")
  ) {
    resultContainer.innerHTML = "Result : You Lost..";
  } else {
    resultContainer.innerHTML = "Result : Draw";
  }
}