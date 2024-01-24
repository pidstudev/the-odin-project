const choiceList = ["rock", "paper", "scissors"];


function game() {
    
    function getComputerChoice() {
        const computerChoice = choiceList[Math.floor(Math.random() * choiceList.length)];
        return computerChoice;
    }
    // console.log("Computer chose: " + getComputerChoice());
    
    function getPlayerChoice() {
        let playerChoice = "PAPER";
        playerChoice = playerChoice.toLowerCase();
        return playerChoice;
    }
    // console.log("Player chose: " + getPlayerChoice());

    function playRound(computerSelection, playerSelection) {
        const computer = getComputerChoice();
        const player = getPlayerChoice();

        console.log("Computer chose: " + computer);
        console.log("Player chose: " + player);

        if (computer === player) {
            return "It's a TIE!";
        } else if (
            (computer === "paper" && player === "rock") ||
            (computer === "rock" && player === "scissors") ||
            (computer === "scissors" && player === "paper")
            ) {
                return `You LOSE! ${computer} beats ${player}.`
        } else {
            return `You WIN. ${player} beats ${computer}.`
        }

    }
    console.log(playRound(computer, player));

}


game();


