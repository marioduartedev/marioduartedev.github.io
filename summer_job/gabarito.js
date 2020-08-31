// Gabarito Exercícios 1 ao 5 - Eventos JavaScript

// Gabarito Exercício 1
window.onload = function () {
  alert('Crie sua ficha cadastral');
};

// Gabarito Exercício 2
const formResponse = document.querySelector('.form-response');
function submitForm() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const adress = document.querySelector('#adress').value;
  const city = document.querySelector('#city').value;
  formResponse.innerHTML =
    `<br>Nome: ${name} <br> Email: ${email} <br> Endereço: ${adress} <br> Cidade: ${city}`;
}

const buttonSubmit = document.querySelector('#submit');
buttonSubmit.addEventListener('click', submitForm);

// Gabarito Exercício 3
function resetForm() {
  formResponse.innerHTML = '';
}

const buttonReset = document.querySelector('#reset');
buttonReset.addEventListener('click', resetForm);

// Gabarito Exercício 4
function changeColor() {
  const colorSelection = event.target.style.backgroundColor;
  formResponse.style.color = colorSelection;
}

const boxBlue = document.querySelector('#blue');
boxBlue.addEventListener('mouseover', changeColor);
const boxRed = document.querySelector('#red');
boxRed.addEventListener('mouseover', changeColor);
const boxGreen = document.querySelector('#green');
boxGreen.addEventListener('mouseover', changeColor);

// Gabarito Exercício 5
function changeSize() {
  const sizeSelection = event.target;
  formResponse.style.fontSize = sizeSelection.innerHTML;
}

const sizeSmall = document.querySelector('#size-20');
sizeSmall.addEventListener('dblclick', changeSize);
const sizeMedium = document.querySelector('#size-24');
sizeMedium.addEventListener('dblclick', changeSize);
const sizeBig = document.querySelector('#size-28');
sizeBig.addEventListener('dblclick', changeSize);

// Gabarito Exercícios Bônus - Eventos JavaScript
let choice = 'circle';
function markFunction() {
  const mark = document.createElement('div');
  mark.className = choice;
  if (choice === 'circle') {
    choice = 'cross';
  } else {
    mark.innerHTML = 'x';
    choice = 'circle';
  }
  event.target.appendChild(mark);
}

const game = document.querySelector('.game');
game.addEventListener('click', markFunction);

let choosen = 'no';
function markChoice() {
  if (choosen === 'no') {
    choice = event.target.id;
    choosen = 'yes';
  } else {
    alert('Você já escolheu!');
  }
}

const circleButton = document.querySelector('#circle');
circleButton.addEventListener('click', markChoice);
const crossButton = document.querySelector('#cross');
crossButton.addEventListener('click', markChoice);
