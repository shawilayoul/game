const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

let squaires = 250;
let colors = ['red', 'blue', 'yellow', 'green', 'orange'];
displays();
function displays() {
    for (let i = 1; i < squaires; i++) {
        const newSquaire = document.createElement('div');
        newSquaire.classList.add('sqauire');
        container.appendChild(newSquaire);
        newSquaire.addEventListener('mouseenter', () => setcolor(newSquaire));
        newSquaire.addEventListener('mouseout', () => removeColor(newSquaire));
    }
}

function setcolor(element) {
    let col = updateColor();
    element.style.background = col;
}
function removeColor(element) {
    element.style.background = 'darkslategray';
}
const sqa = document.querySelectorAll('.sqauire');
container.addEventListener('mouseenter', () => {
    sqa.forEach((s) => {
        s.classList.add('show');
    })
})
btn.addEventListener('click', () => {
    sqa.forEach((s) => {
        s.classList.toggle('show');
    })
})
function updateColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
// tod list style

