import {
  clearGallery,
  showLoader,
  hideLoader,
  renderGallery,
  showBtn,
  hideBtn,
} from './js/render-functions.js';

import { getPhotos } from './js/pixabay-api.js';

const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
const perPage = 12;
let searchQuery = null;

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClick);

async function onSubmit(event) {
  event.preventDefault();
  page = 1;
  hideBtn();
  clearGallery();
  showLoader();
  searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    if (res.hits.length === 0) {
      alert(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    alert(`We find ${res.totalHits} photos`);

    ulEl.innerHTML = renderGallery(res.hits);

    if (res.totalHits > perPage) {
      showBtn();
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
    formEl.reset();
  }
}

async function onClick(e) {
  showLoader();
  page += 1;

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    const lastPage = Math.ceil(res.totalHits / perPage);

    ulEl.insertAdjacentHTML('beforeend', renderGallery(res.hits));

    if (page === lastPage) {
      hideBtn();
      alert('finish');
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
}
