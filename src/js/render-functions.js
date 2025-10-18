// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

function createGallery(images) {
  return images
    .map(
      ({
        webformatUR,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="galerry-list">
    <img class=gallery-img href=${webformatUR} src=${largeImageURL} alt=${tags}>
    <div class="gallery-subcontainer">
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Likes</h3>
      <p class="gallery-subtext">${likes}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Views</h3>
      <p class="gallery-subtext">${views}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Comments</h3>
      <p class="gallery-subtext">${comments}</p>
      </div>
      <div class="gallery-text">
      <h3 class="gallery-subtitle">Download</h3>
      <p class="gallery-subtext">${downloads}</p>
      </div>
    </div>
    </li>`
    )
    .join('');
}

new SimpleLightbox('.gallery-img', {
  captionsData: 'alt',
  captionDelay: 250,
});

function clearGallery() {
  gallery.innerHTML('');
}
function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

export { clearGallery, createGallery, showLoader, hideLoader };
