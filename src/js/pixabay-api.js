import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46841046-91a9933b60f500c097f960e29';

function fetchImages(inputValue) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .catch(error => console.log(error));
}
export { fetchImages };
