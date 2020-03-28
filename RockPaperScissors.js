const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
       return userInput;
    } else{
      console.log('Error typed a valid choice!')
    }
}
  //console.log(getUserChoice('rock'));
  
const getComputerChoice = () => {
let randonNumber = Math.floor(Math.random() * 3);
    switch (randonNumber){
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
    }
}
  
  //console.log(getComputerChoice());
  
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return console.log('The game is a tie!');
      
    } 
    if (userChoice === 'rock'){
        if(compuerChoice === 'paper'){
           return 'The computer won!';
       } else {
          return 'You won!';
      }
    }
    if (userChoice === 'paper'){
        if(computerChoice === 'scissors'){
           return 'The computer won!';
       } else {
          return '2You won!';
      }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}
  //console.log(determineWinner('paper', 'paper'));
  
const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
  