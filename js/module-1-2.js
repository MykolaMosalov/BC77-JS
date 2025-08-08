// * Функціі (аргументи параметри, та повернення значення)

/**
 * Function declaration
 * function fn(){}
 *
 * Function expression
 * const fn1 = function(){}
 */

function getRandomNumber(min, max) {
  // return Math.floor(Math.random() * max + min )
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Напиши функцію яка буде генерувати рандомне число від 1 - 20
// console.log(getRandomNumber(40, 45));
// console.log(Math.floor(Math.random() * 21))
// console.log(Math.floor(Math.random()*(max - min + 1) + min));

// ? Напиши функцію, яка буде виводити найменьше число

function findSmallNumber(a, b, c, d, e) {
  return Math.min(a, b, c, d, e);
}
// console.log(findSmallNumber(10, 8, 2, 4, 9));
// console.log(findSmallNumber(12, 7, 3, 8, 9));

// ? Напиши функцію, яка буде перевіряти пароль у користувача. Запроси пароль у користувача через promt
// const userPassword = prompt("Enter your password");
// const userPassword2 = prompt("Enter your password");

function passwordVerification(password) {
  const origenalPasseord = "admin";
  return origenalPasseord === password;
}

// console.log(passwordVerification(userPassword));
// console.log(passwordVerification(userPassword2));
// console.log(passwordVerification("test"));
// console.log(passwordVerification("12345"));

// ? Напишіть функцію яка приймає наступні параменти userName з ім’ям користувача і payment з сумою до оплати. Функція повинна допомогою шаблонного рядка вивести через alert повідомлення: «Дякуємо, Олександро! До сплати 300 гривень».

const userName = prompt ("Enter your name")
const price = prompt ("Paste a price")

function showUserMessage (name, payment) {
  
alert(`Дякуємо, ${name}! До сплати ${payment} гривень`)
}

console.log(showUserMessage(userName, price));
// console.log(showUserMessage("Микола", 500));