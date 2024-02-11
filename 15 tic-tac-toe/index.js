

const cellIndex = document.querySelectorAll('.cell-index');
const statusText = document.querySelector('#status');
const resetBtn = document.getElementById('reset-btn');
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


let options = ["", "", "", "", "", "", "", "", ""]
let currentPlayer = "X";
let isGameRunning = false;

initializeGame();

function initializeGame(){
    statusText.textContent = `Player ${currentPlayer} turn`;
    resetBtn.addEventListener('click', resetGame);

    cellIndex.forEach(cell => {
        cell.addEventListener('click', handleClickEvent);
    });

    isGameRunning = true;
};

function handleClickEvent(event) {
    const clickedCell = event.target;
    if (clickedCell.textContent === "") {
        clickedCell.textContent = currentPlayer;
        changePlayer();
    };
};

function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer} turn`;
};

function resetGame() {
    cellIndex.forEach(cell => {
        cell.textContent = "";
    });
    currentPlayer = "X";
    statusText.textContent = `Player ${currentPlayer} turn`;
};

function checkWinner() {
    
};

