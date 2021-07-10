const change = document.getElementById('button');
const color = document.getElementById('color');
const body = document.body;

button.addEventListener('click', changeBackground);

function changeBackground() {
  const col1 = randomColor();
  const col2 = randomColor();
  const col3 = randomColor();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;
  
  body.style.background = colorString;
  color.innerText = colorString;
  change.style.color = colorString;
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}