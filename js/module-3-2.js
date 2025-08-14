//TODO:=========task-01=================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbersArr = [5, 20, 50, 100, 2, 200, 1];

// function findSmallerNumber(arr) {
//   if (!Array.isArray(arr)) {
//     return "Is not Array";
//   }
//   let min = arr[0];

//   for (const number of arr) {
//     // console.log(number);
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }

// console.log(findSmallerNumber(numbersArr));

//TODO:============task-02==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// const min = 3;
// const max = 8;

// function minNumber(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Params is not a number";
//   }
//   //   if (a < b) {
//   //     return a;
//   //   } else {
//   //     return b;
//   //   }
//   return Math.min(a, b);
// }
// console.log(minNumber(min, max));

//TODO:=============task-03=================

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // [33, 45, 39, 17, 25, 27, 29] const arr
// function someAirFunction(arr) {
//   const newarr = [];
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     newarr.push(arr[i] + arr[i + 1]);
//   }
//   return newarr;
// }

// console.log(someAirFunction(someArr));
// // console.log(someArr[2] + someArr[1]);
