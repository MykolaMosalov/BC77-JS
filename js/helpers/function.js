export function renderOption(arr, rootSelector) {
  const markup = arr
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
  rootSelector.innerHTML = markup;
}

export function uniqCategory(arr) {
  return arr
    .map((item) => item.category)
    .filter((el, idx, array) => {
      return array.indexOf(el) === idx;
    });
}
