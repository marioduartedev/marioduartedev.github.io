function changeColorToBlue() {
  const bodyPage = document.body;
  bodyPage.style.backgroundColor = 'blue';
}
function changeColorToRed() {
  const bodyPage = document.body;
  bodyPage.style.backgroundColor = 'red';
}

const divBlue = document.querySelector('#blue');
divBlue.addEventListener('click', changeColorToBlue);

const divRed = document.querySelector('#red');
divRed.addEventListener('mouseover', changeColorToRed);
