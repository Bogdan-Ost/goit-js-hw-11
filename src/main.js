// import axios from 'axios';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', searchWord);

function searchWord(event) {
  event.preventDefault();
  if (!input.value.trim()) {
    return alert('asd');
  }
  console.log(input.value);
}
