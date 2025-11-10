let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

let resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = 'Reset';
document.body.prepend(resetButton);

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function makeGrid(gridSize) {
    container.innerHTML = '';

    let boxSize = 800 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let box = document.createElement('div');
        box.classList.add('box');

        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = getRandomHexColor();
        });

        container.appendChild(box);
    }
}

makeGrid(16);

resetButton.addEventListener('click', () => {
    let num = parseInt(window.prompt("Enter a number between 16 and 100:"));
    if (!isNaN(num) && num > 15 && num <= 100) {
        makeGrid(num);
    } else {
        alert("Invalid number! Enter a number from 16 and 100");
    }
});
