import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const formImg = document.querySelector('.form-img');
const inputImg = document.querySelector('.input-img');
const listImages = document.querySelector('.list-img');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');
btnLoadMore.classList.add('hidden');

formImg.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const inputValue = inputImg.value.trim();
  loader.classList.remove('hidden');
  formImg.reset();
  listImages.innerHTML = '';

  if (inputValue === '') {
    loader.classList.add('hidden');
    return iziToast.warning({
      position: 'topCenter',
      title: 'Увага!',
      message: 'Будь ласка,введіть свій запит!',
      backgroundColor: '#ef3040',
    });
  } else {
    fetchImages(inputValue).then(({ hits }) => {
      loader.classList.add('hidden');
      if (hits.length === 0) {
        iziToast.warning({
          position: 'topCenter',
          title: 'Результатів не знайдено!',
          message:
            'На жаль,за вашим запитом не знайдено зображень.Спробуйте ще раз!',
          backgroundColor: '#ef3040',
        });
      } else {
        renderImages(hits);
      }
    });
  }
}

// btnLoadMore.addEventListener('click', onLoadMore());
