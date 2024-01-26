// const choiceList = ["rock", "paper", "scissors"];


// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
    
//     function getComputerChoice() {
//         const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
//         return computerChoice;
//     }

    
//     function getPlayerChoice() {
//         let playerChoice = prompt("Enter your choice (rock, paper, or scissors): ");
//         playerChoice = playerChoice.toLowerCase();
//         return playerChoice;
//     }


//     function playRound(computerSelection, playerSelection) {
//         const computer = computerSelection || getComputerChoice();
//         const player = playerSelection || getPlayerChoice();

//         console.log("Computer chose: " + computer);
//         console.log("Player chose: " + player);

//         if (computer === player) {
//             return "It's a TIE!";
//         } else if (
//             (computer === "paper" && player === "rock") ||
//             (computer === "rock" && player === "scissors") ||
//             (computer === "scissors" && player === "paper")
//         ) {
//             computerScore++;
//             return `You LOSE! ${computer} beats ${player}.`
//         } else {
//             playerScore++;
//             return `You WIN. ${player} beats ${computer}.`
//         }

//     }

//     for (let round = 1; round <= 5; round++) {
//         console.log(`Round ${round}`)
//         console.log(playRound());
//         console.log(`Score: Player ${playerScore} - Computer ${computerScore}\n`)
//     }

//     if (playerScore > computerScore) {
//         console.log("PLAYER wins the game!");
//     } else if (playerScore < computerScore) {
//         console.log("COMPUTER wins the game!");
//     } else {
//         console.log("It's a TIE in the overall game!");
//     }

// }


// game();


const choiceList = ["ROCK", "PAPER", "SCISSORS"];

let playerScore = 0;
let computerScore = 0;

const pChoice = document.getElementById("pChoice");
const cChoice = document.getElementById("cChoice");

function getPlayerChoice () {
    
    function handleChoice(playerChoice) {
        pChoice.textContent = "Player: " + playerChoice;
        getComputerChoice(playerChoice);
    }

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener('click', function () {
        handleChoice("ROCK");
        // console.log("rock");
    });

    paper.addEventListener('click', function () {
        handleChoice("PAPER");
        // console.log("paper");
    });

    scissors.addEventListener('click', function () {
        handleChoice("SCISSORS");
        // console.log("scissors");
    });
}


function getComputerChoice(playerChoice) {
    setTimeout(() => {
        const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
        cChoice.textContent = "Computer: " + computerChoice;

        compareChoices(playerChoice, computerChoice);
    }, 0);
}


function compareChoices(playerChoice, computerChoice) {

    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement = document.getElementById("computer-score");

    if (playerChoice === computerChoice) {
        alert("It's a TIE!");
    } else if (
        // computer wins scenario 
        (computerChoice === "PAPER" && playerChoice === "ROCK") ||
        (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
        (computerChoice === "SCISSORS" && playerChoice === "PAPER")
    ) {
        computerScore++;
        computerScoreElement.textContent = "Computer: " + computerScore;
        alert("Computer wins!");
    } else {
        // player wins scenario 
        playerScore++;
        playerScoreElement.textContent = "Player: " + playerScore;
        alert("Player wins!");
    }

}

getPlayerChoice();

