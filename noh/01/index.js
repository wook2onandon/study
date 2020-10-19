
const fromEl = document.getElementById('from');
const toEl = document.getElementById('to');

let index = 0;
const addText  = (e) => {
  const newEl = document.createElement('p')
  newEl.innerText = index++
  
  toEl.appendChild(newEl)
}

fromEl.addEventListener('click',addText )