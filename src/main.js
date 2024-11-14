import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages, cleanPage, addPage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const formImg = document.querySelector('.form-img');
const inputImg = document.querySelector('.input-img');
const listImages = document.querySelector('.list-img');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

formImg.addEventListener('submit', handleSearch);

btnLoadMore.addEventListener('click', loadMoreImages);

let inputValue = '';

function handleSearch(event) {
  event.preventDefault();
  inputValue = inputImg.value.trim();

  loader.classList.remove('hidden');
  btnLoadMore.classList.add('hidden');

  listImages.innerHTML = '';
  cleanPage();

  if (inputValue === '') {
    loader.classList.add('hidden');
    return iziToast.warning({
      position: 'topCenter',
      title: 'Поле не може бути пустим!',
      message: 'Будь ласка,введіть свій запит!',
      backgroundColor: '#ef3040',
    });
  }

  fetchAndRenderImages();
  formImg.reset();
  btnLoadMore.classList.remove('hidden');
}

async function fetchAndRenderImages() {
  try {
    const data = await fetchImages(inputValue);
    console.log(data);
    loader.classList.add('hidden');
    if (data.hits.length === 0) {
      iziToast.warning({
        position: 'topCenter',
        title: 'Результатів не знайдено!',
        message:
          'На жаль,за вашим запитом не знайдено зображень.Спробуйте ще раз!',
        backgroundColor: '#ef3040',
      });
      btnLoadMore.classList.add('hidden');
    }
    renderImages(data.hits);

    if (data.totalHits.length > page * perPage) {
      btnLoadMore.classList.remove('hidden');
      loadMoreImages();
    } else {
      btnLoadMore.classList.add('hidden');
      iziToast.info({
        position: 'topCenter',
        title: 'УПС!',
        message:
          'Нам дуже шкода,але за вашим запитом більше зображень не знайдено!',
      });
    }
  } catch (error) {
    console.error('Помилка отримання і відображення зображень', error);
  }
}

function loadMoreImages() {
  addPage();
  loader.classList.remove('hidden');
  fetchAndRenderImages();
}
