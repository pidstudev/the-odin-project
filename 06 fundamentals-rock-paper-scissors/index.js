
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
        checkGameWinner();
    } else {
        // player wins scenario 
        playerScore++;
        playerScoreElement.textContent = "Player: " + playerScore;
        checkGameWinner();
    }

}

const resetGameButton = document.getElementById("reset-btn");

resetGameButton.addEventListener('click', function () {
    location.reload();
});


function checkGameWinner() {
    if (playerScore === 3) {
        alert("Player wins the game!");
        disableChoiceButtons();
    } else if (computerScore === 3) {
        alert("Computer wins the game!");
        disableChoiceButtons();
    }
}

function disableChoiceButtons() {
    const choiceButtons = document.querySelectorAll('.btn-list button');
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
    document.getElementById('reset-btn').disabled = false;
}


getPlayerChoice();

