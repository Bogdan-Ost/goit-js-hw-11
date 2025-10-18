import { getImagesByQuery, KEY } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
form.addEventListener('submit', searchWord);

function searchWord(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  if (!input.value.trim()) {
    return (input.value = '');
  }

  getImagesByQuery(input.value)
    .then(data => createGallery(data.hits))
    .catch(error => console.log(error.message))
    .finally(() => hideLoader(), event.target.reset());
}
