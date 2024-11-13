import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46841046-91a9933b60f500c097f960e29';
let page = 1;
const perPage = 15;

async function fetchImages(inputValue) {
  const params = {
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    if (response.status !== 200) {
      throw new Error('Error:${response.status}');
    }
    return response.data;
  
  } catch (error) {
    console.error('Помилка отримання зображень', error);
  }
}
function cleanPage() {
  page = 1;
}

function addPage() {
  page += 1;
}
export { fetchImages, cleanPage, addPage };
