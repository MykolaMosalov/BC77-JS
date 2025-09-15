const ulEl = document.querySelector(".gallery-list");
const loader = document.querySelector(".loader");

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
    .join("");
}

export const gallery = new SimpleLightbox(".gallery a", {
  /* options */
});

export function clearGallery() {
  ulEl.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("is-hidden");
}
export function hideLoader() {
  loader.classList.add("is-hidden");
}
