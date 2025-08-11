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
