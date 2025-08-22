//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const res = numbers.map((number) => number ** 2);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = data.flatMap((element) => element.values);
// console.log(res);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: "John", age: 11 },
//   { name: "Jane", age: 15 },
//   { name: "Bob", age: 19 },
// ];

// // const res = people.some((el, indx, array) => el.age < 20);
// // console.log(res);

// const res = people.every((el, indx, array) => el.age < 20);
// console.log(res);

//TODO:=========task-04=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const firstOddNumber = numbers.find((number) => number % 2 !== 0);
// console.log(firstOddNumber);

//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 2, 5, 1, 3];

// const result = numbers.toSorted((b, a) => a - b);
// console.log(result);

//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const res = stringArray.toSorted((a, b) => {
//   return a.localeCompare(b);
// });
// console.log(res);

//TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const res = user.filter(el => {
  return el.age > 20;
});

console.log(res);
