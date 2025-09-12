function getImagesByQuery(q) {
  const BASE_URL = "https://pixabay.com";
  const API_KEY = "52236673-dfbbe0e7dd19cbeb92e7645c8";
  const END_POINT = "/api/";
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

const formEl = document.querySelector("form");
const ulEl = document.querySelector(".gallery-list");
// console.log(formEl);

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const inputQuerry = event.currentTarget.elements["search-text"].value.trim();

  getImagesByQuery(inputQuerry)
    .then((response) => {
      const photosArray = response.hits;
      ulEl.innerHTML = renderGallery(photosArray);
      console.log(photosArray);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      formEl.reset();
    });
}

function renderGallery(array = []) {
  return array
    .map(
      ({ webformatURL, tags }) =>
        ` <li>
        <img src="${webformatURL}" alt="${tags}">
      </li>`
    )
    .join("");
}
