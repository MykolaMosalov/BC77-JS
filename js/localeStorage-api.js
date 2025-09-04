export function addDataToLocaleStorage(key, value) {
  try {
    const normolized = JSON.stringify(value);
    localStorage.setItem(key, normolized);
  } catch (error) {
    console.error(error);
  }
}

export function getDataFromLocaleStorage(key) {
  try {
    const normolized = JSON.parse(localStorage.getItem(key));
    return normolized === null ? undefined : normolized;
  } catch (error) {
    console.error(error);
  }
}

export function removeKeyFromLocaleStorege(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}

export function cleareDataFromlocaleStorage() {
  localStorage.clear();
}
