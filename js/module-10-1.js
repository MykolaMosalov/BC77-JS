const dateContainer = document.querySelector('.js-container');
const monthEl = dateContainer.querySelector('.js-month');
const dayEl = dateContainer.querySelector('.js-day-number');
const weekdayEl = dateContainer.querySelector('.js-day');
const yearEl = dateContainer.querySelector('.js-year');

const currentDate = new Date();

const month = currentDate.toLocaleDateString('uk-UA', { month: 'long' });

const day = currentDate.toLocaleDateString('uk-UA', { day: 'numeric' });

const weekday = currentDate.toLocaleDateString('uk-UA', { weekday: 'long' });

const year = currentDate.toLocaleDateString('uk-UA', { year: 'numeric' });

monthEl.textContent = month;
dayEl.textContent = day;
weekdayEl.textContent = weekday;
yearEl.textContent = year;

const inputDate = document.querySelector('.js-input');
const dateBtn = document.querySelector('.js-form-btn');
const outputDate = document.querySelector('.js-form-result');

dateBtn.addEventListener('click', onDateBtnClick);
function onDateBtnClick(event) {
  const clientData = new Date(inputDate.value);

  const globalData = new Date();

  if (clientData > globalData) {
    alert('Wrong Date!');
    return;
  }
  const diff = globalData - clientData;
  outputDate.textContent = `Your age is ${getAge(diff)} year old`;
}

function getAge(ms) {
  return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}

// ## 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.

// Стиль для body для плавного переходу

const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];
