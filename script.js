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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // computerSelection = computerSelection.toLowerCase();
    // you lose

    if(playerSelection == 'rock' || playerSelection == 'scissor' || playerSelection == 'paper') {

        if(
            (playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'scissor' && computerSelection == 'rock') ||
            (playerSelection == 'paper' && computerSelection == 'scissor')
        ) {
            return (`YOU LOSE !! ${computerSelection} beats ${playerSelection}`);
        }

        // you win
        if(
            (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'scissor' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'rock')
        ) {
           return (`YOU WIN !! ${playerSelection} beats ${computerSelection}`);
        } 
        
        // tie game
        else {
            return ("TIED !!");
            // playRound(playerSelection, computerSelection);
        }

    } else {
        alert("Enter the correct option you IDIOT");
        playTheRound();

    }

}


function playTheRound() {
        getComputerChoice();

        let playerSelection = (prompt("Enter your choice : rock paper or scissor").trim());

        // main
        // let playerSelection = 'rock';
        // let playerSelection = prompt("Enter your choice, rock, paper or scissor");

        playerSelection = playerSelection.trim();
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

}

function game(rounds) {


    for (let i = 0; i < rounds; i++) {
        playTheRound();
    }

}


let rounds;

while (typeof(rounds) !== typeof(5)) {
    rounds = parseInt(((prompt("Enter the number of rounds")).trim()));
}

// console.log(rounds);
// console.log(typeof rounds)

game(rounds);












