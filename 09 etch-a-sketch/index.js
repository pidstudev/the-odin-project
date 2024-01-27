const divContainer = document.getElementById("div-container");
let isMouseDown = false;


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

for (let i = 1; i <= 16; i++) {

    const row = document.createElement('div');
    row.className = "row";

    for (let j = 1; j <= 16; j++) {

        const squareDiv = document.createElement('div');
        squareDiv.className = "square";

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



