import {
  clearGallery,
  showLoader,
  hideLoader,
  gallery,
  renderGallery,
} from "./render-functions.js";

import { getImagesByQuery } from "./pixabay-api.js";

const formEl = document.querySelector("form");
const ulEl = document.querySelector(".gallery-list");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();
  const inputQuerry = event.currentTarget.elements["search-text"].value.trim();

  getImagesByQuery(inputQuerry)
    .then((response) => {
      const photosArray = response.hits;

      if (photosArray.length === 0) {
        alert(
          "Sorry, there are no images matching your search query. Please try again!"
        );
        return;
      }
      ulEl.innerHTML = renderGallery(photosArray);
      gallery.refresh();
    })
    .catch((error) => {})
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}
