console.log('Hey here I am.');

const container = document.querySelector('.container');
const numCols = 30;
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear the Screen';
clearButton.classList.add('nav-button');
clearButton.addEventListener('click', clearScreen);

function drawBoxes(gridSize) {
    document.documentElement.style.setProperty('--grid-size', gridSize);
    document.documentElement.style.setProperty('--box-size', 960 / gridSize);
    for (i=0; i<(gridSize * gridSize); i++) {
        const thisDiv = document.createElement('div');
        thisDiv.classList.add('square');
        thisDiv.id = i;
        container.appendChild(thisDiv);
    }
}

function makeBlack(e) {
    console.log(e.target.id);
    let squareToChange = document.getElementById(e.target.id);
    squareToChange.style.backgroundColor = 'black';
    squareToChange.style.transition = 'background-color .5s';
}

function clearScreen() {
    console.log('This will clear the screen');
    squares.forEach((button) => {
        button.style.backgroundColor = 'white';
    })
    drawNewBoxes();
}

function drawNewBoxes() {
    newNumCols = parseInt(prompt('How many rows this time?'));
    squares.forEach((square) => {
        square.remove();
    });
    drawBoxes(newNumCols);
    window.squares = document.querySelectorAll('.square');
    window.squares.forEach((square) => {
        square.addEventListener('mouseover', makeBlack);
    });
}

drawBoxes(numCols);
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', makeBlack);
});

document.body.appendChild(clearButton);


