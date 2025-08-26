//* Модуль 6. Заняття 12. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//   constructor() {
//     this.result = 0;
//   }
//   number(num) {
//     this.result += num;
//     return this;
//   }
//   getResult() {
//     return this.result;
//   }

//   add(num) {
//     this.result += num;
//     return this;
//   }
//   substruct(num) {
//     this.result -= num;
//     return this;
//   }
//   divide(num) {
//     this.result /= num;
//     return this;
//   }
//   multiply(num) {
//     this.result *= num;
//     return this;
//   }
// }

// const calculator = new Calculator();
// const res = calculator.number(20).multiply(2).divide(10).getResult();
// console.log(res);

// const calculator2 = new Calculator();
// const res2 = calculator2.number(15).multiply(2).divide(3).getResult();
// console.log(res2);

// console.log(calculator);

// calculator.number(10);
// calculator.divide(2);
// console.log(calculator.getResult());
