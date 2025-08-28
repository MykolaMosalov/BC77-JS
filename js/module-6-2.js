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
//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */
// class Client {
//     #login;
//     #email;
//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
//      get login() {
//         return this.#login;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
// }

// const client = new Client("admin", "ad@gmail.com");
// client.login = "1234"
// console.log(client);

//TODO:=========task-03=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/
/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const person = new Person("Arthur", 24, "male", "arthur@mail.com");
// console.log(person);

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department, hobby) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//     this.hobby = hobby;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       department: this.department,
//       hobby: this.hobby,
//     };
//   }
// }

// const worker = new Employee(
//   "Nikita",
//   30,
//   "male",
//   "Nikita@gmail.com",
//   600,
//   "it",
//   "gambling"
// );
// console.log(worker.getEmployeeDetails());
