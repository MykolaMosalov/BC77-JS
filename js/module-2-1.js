// console.log(!true);
// console.log(!!"Hello ");
// const age = 20;
// const isAdult = age >= 18;
// console.log("🚀 ~ isAdult:", isAdult);

/**
 * //* Розгалуження: if, if...else, else...if
//TODO:============task-1=========================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */

const str = "abcde";
// console.log(str[0] === "a");

// if (str[0] === "a") {
//   console.log("Так");
// } else {
//   console.log("Ні");
// }

function isStrStartWithA(string) {
  //   return string.startsWith("a") ? true : false;
  return string.startsWith("a");
}

const res = isStrStartWithA("hello");
// console.log(res);

// const res1 = isStrStartWithA("abc");
// console.log(res1);
// if (res) {

// } else {

// }

//TODO:============task-2=========================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const userName = "Victor";
const lastName = "Sashco";

// let results = null;

// if (userName.length > 4 && lastName.length > 5) {
//   results = userName.length + lastName.length;
// } else {
//   results = `неможливо виконати умову`;
// }

// console.log(results);

function checkFullName(a, b) {
  if (a.length > 4 && b.length > 5) {
    return a.length + b.length;
  }
  return `неможливо виконати умову`;
}

// console.log(checkFullName(userName, lastName));
// console.log(checkFullName("Mango", "Petro"));
