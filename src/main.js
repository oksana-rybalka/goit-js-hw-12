import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {
  fetchImages,
  cleanPage,
  addPage,
  page,
  perPage,
} from './js/pixabay-api';
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
  scrollPage();
  formImg.reset();
}

function loadMoreImages() {
  addPage();
  loader.classList.remove('hidden');
  fetchAndRenderImages();
  scrollPage();
}

async function fetchAndRenderImages() {
  try {
    const data = await fetchImages(inputValue);
    console.log(data);

    loader.classList.add('hidden');

    if (data.hits.length === 0) {
      btnLoadMore.classList.add('hidden');
      iziToast.warning({
        position: 'topCenter',
        title: 'Результатів не знайдено!',
        message: 'Спробуйте інший запит!',
        backgroundColor: '#ef3040',
      });
      return;
    }

    if (data.totalHits > page * perPage) {
      btnLoadMore.classList.remove('hidden');
    } else {
      btnLoadMore.classList.add('hidden');
      iziToast.info({
        position: 'bottomCenter',
        title: 'УПС!',
        message: 'Це всі зображення за вашим запитом!',
        backgroundColor: '#ff3d00',
        color: '#fff',
      });
    }

    renderImages(data.hits);
  } catch (error) {
    console.log('Помилка отримання і відображення зображень', error);
  }
}

function scrollPage() {
  const galleryItem = document.querySelector('.list-image-item');
  console.log(galleryItem);
  
  if (galleryItem) {
    const { height } = galleryItem.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
}
