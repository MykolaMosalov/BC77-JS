// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

const human = {
  userName: "Diana",
  hobby: "IT",
  age: 20,
};
// human.mood = "happy";
// human.hobby = "skydiving";
// human["age"] = 21;
// console.log(human);

// * Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-2======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// function getBool(obj, value) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (key === value) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function getBool(obj, key) {
//   const arrayKeys = Object.keys(obj);
//   return arrayKeys.includes(key);
// }

// function getBool(obj, key) {
//   return key in obj;
// }

// console.log(getBool(human, "age"));

//TODO:============task-3======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

const salaries = {
  tolia: 1500,
  anton: 3000,
  taras: 4000,
};

let sumSalries = 0;

// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)) {
//     sumSalries += salaries[key];
//   }
// }

const arrayValues = Object.values(salaries);

for (const number of arrayValues) {
  sumSalries += number;
}
console.log(sumSalries);
