// ## 3. Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, яка картинка зараз показується.

// Стиль для body для плавного переходу

const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];
const bodyEl = document.body;

bodyEl.style.backgroundImage = images[0];

let count = 1;

function changeBackground(arr = []) {
  bodyEl.style.backgroundImage = images[count];
  count += 1;
  if (images[count] === undefined) {
    count = 0;
  }
}

setInterval(changeBackground, 5000);
