const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const colors = document.getElementById('colors');


color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);

function changeColor() {
    document.body.style = `
    background-image: linear-gradient(to right, ${color1.value} , ${color2.value})
    `;
    colors.textContent = `rgb values: ${color1.value}, ${color2.value}`
}