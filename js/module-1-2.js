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
  return Math.min(a, b, c, d, e)
}
// console.log(findSmallNumber(10, 8, 2, 4, 9));
// console.log(findSmallNumber(12, 7, 3, 8, 9));