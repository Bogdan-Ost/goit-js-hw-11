import axios from 'axios';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '52797482-aafa905b189c4ff0c9ee358ec';

function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(({ data }) => {
      if (data.hits.length > 0) {
        return data;
      } else {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          // color: red,
        });
      }
    })
    .catch(error => {});
}

export { getImagesByQuery, KEY };
