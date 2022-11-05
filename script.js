
// gets random choice from the computer {0, 1, 2}
// according to the number, it selects the choice rock paper of scissor

function getComputerChoice() {
    let choice = Math.random();
    choice = Math.floor(choice*10);

    // console.log(choice);
    // generate 0 1 or 2
    choice = choice % 3;

    // console.log(choice);

    const choiceList = ["rock", "paper", "scissor"];
    return choiceList[choice];
}

// setting the player's score and ties if there might be any
let playerScore = 0;
let ties = 0;

// mechanics of playing the round

function playRound(playerSelection, computerSelection) {

    // to make case insensitive
    playerSelection = playerSelection.toLowerCase();

    // valid choice check

    if(playerSelection == 'rock' || playerSelection == 'scissor' || playerSelection == 'paper') {

        // you lose
        if(
            (playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'scissor' && computerSelection == 'rock') ||
            (playerSelection == 'paper' && computerSelection == 'scissor')
        ) {
            return (`YOU LOSE !! computer : ${computerSelection} beats player : ${playerSelection}`);
        }
        // you win
        if(
            (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'scissor' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')
        ) {
           playerScore++;
           return (`YOU WIN !! player : ${playerSelection} beats computer : ${computerSelection}`);
        } 
        
        // tie game
        else {
            ties++;
            return ("TIED !!");
        }

    } 
    else {
        alert("Enter the correct option you IDIOT");
        
        // plays round again if not valid input
        playTheRound();

    }

}

// play round with the input from the user

function playTheRound() {
        getComputerChoice();

        let playerSelection = (prompt("Enter your choice : rock paper or scissor").trim());

        // compatible with whitespace using string.trim();

        playerSelection = playerSelection.trim();
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

}

// play the required number of rounds
function game(rounds) {

    for (let i = 0; i < rounds; i++) {
        playTheRound();
    }

}


let rounds;

// check for valid number input value

while (typeof(rounds) !== typeof(5)) {
    rounds = parseInt(((prompt("Enter the number of rounds")).trim()));
}

// final game execution
game(rounds);

// print the score
console.log(`Your score is ${playerScore} out of ${rounds}`);
console.log("Number of ties = " + ties);



