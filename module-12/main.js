import { getPhotos } from './js/pixabay-api.js';
import {
  createGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showBtn,
  hideBtn,
} from './js/render-function.js';

let page = 1;
const perPage = 12;
let searchQuery = null;

const ulEl = document.querySelector('ul');
const formEl = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more');

const onSubmit = async (e) => {
  e.preventDefault();
  clearGallery();
  page = 1;

  showLoader();
  hideBtn();

  searchQuery = e.currentTarget.elements.query.value.trim();

  if (!searchQuery) {
    return alert('Empty query');
  }

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    const photos = res.totalHits;

    alert(`We find ${photos} photos`);

    ulEl.innerHTML = createGallery(res.hits);

    if (photos > perPage) {
      showBtn();
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();

    formEl.reset();
  }
};

const onClick = async (e) => {
  page += 1;
  showLoader();

  try {
    const res = await getPhotos(searchQuery, page, perPage);

    const lastPage = Math.ceil(res.totalHits / perPage);

    ulEl.insertAdjacentHTML('beforeend', createGallery(res.hits));

    if (lastPage === page) {
      hideBtn();
      alert('Congratulations!!!!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
  }
};

formEl.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onClick);
