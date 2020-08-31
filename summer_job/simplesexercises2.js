const text = document.querySelector('#text');
function writeText() {
  const box = document.querySelector('.textBox');
  box.innerHTML = text.value;
}
text.addEventListener('keyup', writeText);
