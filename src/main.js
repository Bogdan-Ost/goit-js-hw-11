import axios from 'axios';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImagesByQuery, KEY } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader ');
form.addEventListener('submit', searchWord);

function searchWord(event) {
  event.preventDefault();
  console.log(input.value);
  if (!input.value.trim()) {
    return alert('asd');
  }

  getImagesByQuery(input.value).then(data => {
    gallery.innerHTML = createGallery(data.hits);
  });
  // createGallery(data.hits);
}

new SimpleLightbox('.gallery-img', {
  captionsData: 'alt',
  captionDelay: 250,
});
