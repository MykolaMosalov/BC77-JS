// * Методи рядків: slice, toLowerCase, includes,startsWith,indexOf,trim

//? Запитайте у користувача ім'я та дізнайтеся, зі скількох символів, воно складається.

// const userName = prompt("Введіть ваше імя").trim();
// alert(`Ваше імя містить: ${userName.length} символів 🧹`);

//? Попросіть користувача ввести email і переведіть у нижній регістр.

// const userEmail = prompt("Введіть вашу Електронну пошту").trim();
// alert(userEmail.toLowerCase());

// ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'. Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?
// ? Якщо є, дізнайтесь позицію на якій перебуває цей підрядок

// const languages = "HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++, JavaScript";

// const value = languages.includes("JS") || languages.includes("JavaScript");
// console.log(value);

// const indexElement = languages.indexOf("JS");
// if (indexElement === -1) {
//   console.log(languages.indexOf("JavaScript"));
// } else {
//   console.log(indexElement);
// }

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на: %, rem, em або px;

// const str = "24px";

// console.log(str.endsWith("px"));

// if (str.endsWith("px")) {
//   console.log("px");
// } else if (str.endsWith("%")) {
//   console.log("%");
// } else if (str.endsWith("rem")) {
//   console.log("rem");
// } else if (str.endsWith("em")) {
//   console.log("em");
// } else {
//   console.log("ERROR");
// }

// ?  Дано рядок 'Vasyl Pupkin is 24 years old'. Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.

// const someStr = "Vasyl Pupkin is 24 years old";

// const fullName = someStr.slice(0, 12);
// console.log(fullName);

// const userAge = someStr.slice(16, 19);
// console.log(userAge);

// ?  У нас є рядок: 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
// ? Замініть усі входження dog на monkey.

// const str =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

// console.log(str.replaceAll("dog", "monkey"));

// * Цикли: while, do while, for

//TODO:============task-01=========================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;

// while (i <= 50) {
//   console.log(i);
//   i += 1;
// }

//TODO:============task-02=========================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let number;

// do {
//   number = Number.parseInt(prompt("Введіть число більше 100"));
// } while (number <= 100);

//TODO:============task-03=========================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****

// Тут задаемо змінну яка буде виводитись в консоль (можемо задати будь яке значення, в нашому випадку зірочка)
let star = "*";

// Тут записуєшь скільки циклів тобі потрібно вивксти (в нашому випадку 7)
// for (let i = 0; i < 7; i += 1) {
//   // тут задаємо формулу з якою змінною треба працювати
//   console.log(star);
//   // тут задаємо формулу з якою змінною треба працювати
//   star += "*";
// }

// Порахуйте суму чисел від 12 до 27
// const num1 = 12;
// const num2 = 27;

// // for (let i = 1; i <= 10; i += 1) {
// //   console.log(i);
// // }
// let total = 0;

// for (let i = num1; i <= num2; i += 1) {
//   total += i;
// }
// console.log(total);
