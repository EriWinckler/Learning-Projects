function computerPlay() {
  const random = Math.floor(Math.random() * 3 + 1);
  switch (random) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  };
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "Rock") {
      return "It's a tie";
    } else if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock!";
    } else {
      return "You Win! Rock beats Scissors";
    }
  };
  if (playerSelection === "paper") {
    if (computerSelection === "Rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "Paper") {
      return "It's a tie!";
    } else {
      return "You Lose! Scissors beats Paper";
    }
  };
  if (playerSelection === "scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "Its a tie!";
    }
  };
}

function game() {
  count = 0;
  while (count < 5) {
    count++;
    const playerSelection = prompt("Rock, Paper or Scissors? Choose wisely!").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
