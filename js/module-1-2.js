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
