console.log('Hey here I am.');

const container = document.querySelector('.container');

for (i=0; i<2500; i++) {
    const thisDiv = document.createElement('div');
    thisDiv.classList.add('square');
    thisDiv.textContent = "X";
    thisDiv.id = i;
    container.appendChild(thisDiv);
}

