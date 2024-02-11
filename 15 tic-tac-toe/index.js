const TicTacToeGame = () => {

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
    
    const initializeGame = () => {
        statusText.textContent = `Player ${currentPlayer} turn`;
        resetBtn.addEventListener('click', resetGame);
    
        cellIndex.forEach(cell => {
            cell.addEventListener('click', handleClickEvent);
        });
    
        isGameRunning = true;
    };
    
    function handleClickEvent(event) {

        if (!isGameRunning) {
            return;
        };

        const clickedCell = event.target;
        const clickedCellIndex = this.getAttribute("id");
    
        if (clickedCell.textContent === "") {
            clickedCell.textContent = currentPlayer;
        };
    
        if (options[clickedCellIndex] != "" || !isGameRunning) {
            return;
        };
    
        options[clickedCellIndex] = currentPlayer;
        changePlayer();
        console.log(options);
        checkWinner();
    };
    
    function changePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer} turn`;
    };
    
    function resetGame() {
        currentPlayer = "X";
        options = ["", "", "", "", "", "", "", "", ""];
        statusText.textContent = `Player ${currentPlayer} turn`;
        cellIndex.forEach(cell => cell.textContent = "");
        isGameRunning = true;
    };
    
    function checkWinner() {
        let hasWinner = false;
    
        for(let i = 0; i < winCondition.length; i++) {
            const condition = winCondition[i];
            const cellA = options[condition[0]];
            const cellB = options[condition[1]];
            const cellC = options[condition[2]];
    
            if(cellA == "" || cellB == "" || cellC == ""){
                continue;
            };
            if(cellA == cellB && cellB == cellC) {
                hasWinner = true;
                break;
            };
        };
    
        if(hasWinner) {
            changePlayer();
            statusText.textContent = `Player ${currentPlayer} wins!`;
            isGameRunning = false;
        }
        else if(!options.includes("")) {
            statusText.textContent = "It's a Draw!";
            isGameRunning = false;
        }
        else {
            isGameRunning = true;
        }
    
    };

    return {
        initializeGame
    };
    
};

const game =TicTacToeGame();
game.initializeGame();