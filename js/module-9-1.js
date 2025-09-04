import {
  addDataToLocaleStorage,
  getDataFromLocaleStorage,
} from "./localeStorage-api.js";

import { bodyEl, switchEl } from "./refs.js";

import { theme } from "./lsKeys.js";

switchEl.addEventListener("change", onChangeSwitch);
document.addEventListener("DOMContentLoaded", renderPage);

function onChangeSwitch(event) {
  const isActive = event.currentTarget.checked;
  if (isActive) {
    bodyEl.classList.replace("light", "dark");
    addDataToLocaleStorage(theme, "dark");
  } else {
    bodyEl.classList.replace("dark", "light");
    addDataToLocaleStorage(theme, "light");
  }
}

function renderPage(event) {
  const lsData = getDataFromLocaleStorage(theme);
  console.log(lsData);
  if (lsData === "dark") {
    bodyEl.classList.replace("light", "dark");
    switchEl.checked = true;
  } else {
    bodyEl.classList.replace("dark", "light");
  }
}
