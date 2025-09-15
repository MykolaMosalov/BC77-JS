const loaderEl = document.querySelector('span');
const ulEl = document.querySelector('ul');
const loadMoreBtn = document.querySelector('.load-more');

export function createGallery(arr) {
  return arr
    .map(
      ({ webformatURL, tags }) => `
    <li>
          <img src="${webformatURL}" alt="${tags}">
        </li>
    `
    )
    .join('');
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function clearGallery() {
  ulEl.innerHTML = '';
}

export function showBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideBtn() {
  loadMoreBtn.classList.add('is-hidden');
}
