const ulEl = document.querySelector('ul');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function renderGallery(array = []) {
  return array
    .map(
      ({ webformatURL, tags }) =>
        ` <li>
      <a href="${webformatURL}">
        <img src="${webformatURL}" alt="${tags}">
        </a>
      </li>`
    )
    .join('');
}

export function clearGallery() {
  ulEl.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
