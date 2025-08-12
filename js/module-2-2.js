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
