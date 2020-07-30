const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Error, not valid argument");
    }
  };
  
  console.log(getUserChoice("Paper"));
  
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  };
  
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "Computer Win!";
      } else {
      return "Player Win!";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        return "Player Win!";
      } else {
        return "Computer Win!";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        return "Player Win!";
      } else {
        return "Computer Win!";
      }
    }
  };
    
    
  
  console.log(determineWinner("paper", "paper"));
  console.log(determineWinner("rock", "paper"));
  console.log(determineWinner("rock", "scissors"));
  
  const playGame = () => {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log(`You choose: ${userChoice}`);  
    console.log(`Computer choose: ${computerChoice}`);
    
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();