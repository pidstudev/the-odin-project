const divContainer = document.getElementById("div-container");
let isMouseDown = false;

const gridSize = 64;

function calculateSquareSize() {
    const drawingPadSize = 400;
    return drawingPadSize / gridSize;
}

function changeSquareColor(squareDiv) {
    if (isMouseDown) {
        squareDiv.style.backgroundColor = 'black';
    }
}

document.addEventListener('mousedown', function () {
    isMouseDown = true;
});

document.addEventListener('mouseup', function () {
    isMouseDown = false;
});

for (let i = 1; i <= gridSize; i++) {

    const row = document.createElement('div');
    row.className = "row";

    for (let j = 1; j <= gridSize; j++) {

        const squareDiv = document.createElement('div');
        squareDiv.className = "square";

        const squareSize = calculateSquareSize();
        squareDiv.style.width = squareSize + "px";
        squareDiv.style.height = squareSize + "px";

        squareDiv.addEventListener('mousedown', function () {
            changeSquareColor(squareDiv);
        });

        squareDiv.addEventListener('mouseenter', function() {
            changeSquareColor(squareDiv);
        });

        row.appendChild(squareDiv);
    }

    divContainer.appendChild(row);
}



