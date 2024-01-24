const choiceList = ["rock", "paper", "scissors"];


function game() {

    let playerScore = 0;
    let computerScore = 0;
    
    function getComputerChoice() {
        const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
        return computerChoice;
    }

    
    function getPlayerChoice() {
        let playerChoice = prompt("Enter your choice (rock, paper, or scissors): ");
        playerChoice = playerChoice.toLowerCase();
        return playerChoice;
    }


    function playRound(computerSelection, playerSelection) {
        const computer = computerSelection || getComputerChoice();
        const player = playerSelection || getPlayerChoice();

        console.log("Computer chose: " + computer);
        console.log("Player chose: " + player);

        if (computer === player) {
            return "It's a TIE!";
        } else if (
            (computer === "paper" && player === "rock") ||
            (computer === "rock" && player === "scissors") ||
            (computer === "scissors" && player === "paper")
        ) {
            computerScore++;
            return `You LOSE! ${computer} beats ${player}.`
        } else {
            playerScore++;
            return `You WIN. ${player} beats ${computer}.`
        }

    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`)
        console.log(playRound());
        console.log(`Score: Player ${playerScore} - Computer ${computerScore}\n`)
    }

    if (playerScore > computerScore) {
        console.log("PLAYER wins the game!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER wins the game!");
    } else {
        console.log("It's a TIE in the overall game!");
    }

}


game();


