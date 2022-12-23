// get a user choice 
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput; 
    }else {
        console.log('Error'); 
    }
};
// get a Computer Choice 
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);  
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
// serch a winner 
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You win ! A \'BOMB\' went off and beat everyone ';
    }
    else if (userChoice == computerChoice) {
        return 'It\'s was a tie';
         
    } else if (userChoice === 'rock') {
        if (computerChoice ==='paper') {
            return 'Computer choice is Paper: You have lost';
             
        }else {
            return 'Computer choice is a Scissors: YOU WON !!! ';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer choice is Scissors: You have lost';
             
        } else {
           return 'Computer choice is a Rock: YOU WON !!!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice ==='rock') {
           return 'Computer choice is Rock: You have lost';
             
        } else {
           return 'Computer choice is a Paper: YOU WON !!!';
        }
    }  else {
        return 'please enter three choices "rock, paper, scissors"';
    } 
};

// start the game
const playGame = ()=> {
    const userChoice = getUserChoice('paper');  // write hier rock, paper or Scissors 
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice,computerChoice));
}; 
playGame(); // in this game we have a cheat - if you will type bomb, you will win everytime !
