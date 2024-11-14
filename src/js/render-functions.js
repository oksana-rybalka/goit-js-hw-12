import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const listImages = document.querySelector('.list-img');

const lightbox = new SimpleLightbox('.img-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function renderImages(array) {
  const markup = array
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="list-img-item">
      <a class="img-link" href="${largeImageURL}" >
      <img class="image" src="${webformatURL}" alt="${tags}" width="100%"/>
       <div class="image-info">
        <div class="text-info-item">
          <h2 class="title">Likes</h2>
          <p class="data-title">${likes}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Views</h2>
          <p class="data-title">${views}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Comments</h2>
          <p class="data-title">${comments}</p>
        </div>
        <div class="text-info-item">
          <h2 class="title">Downloads</h2>
          <p class="data-title">${downloads}</p>
        </div>
      </div>
        </a>
    </li> `
    )
    .join('');

  listImages.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}
export { renderImages };
