// * Свторення методів обєкту
//TODO:============task-1==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.
const rectangle = {
  length: 100,
  width: 20,
  calculateArea() {
    return this.length * this.width;
  },
};
// console.log(rectangle.calculateArea());

//TODO:============task-2==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const cart = {
//   productsList: [
//     { name: 'phone', price: 20000 },
//     { name: 'tablet', price: 28000 },
//   ],

//   calculateTotal() {
//     let totalSum = 0;
//     for (const product of this.productsList) {
//       totalSum += product.price;
//     }
//     return `Сума до сплати ${totalSum}`;
//   },
// };

// console.log(cart.calculateTotal());

//TODO:============task-3==============================================
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

// const bankAccount = {
//   // ownerName: "Polina",
//   // accountNumber: 88,
//   // balance: 2500,

//   deposite(sum) {
//     this.balance += sum;
//     return `Ваш баланш поповненно на ${sum}, залишок на балансі ${this.balance}`;
//   },

//   withdraw(sum) {
//     if (this.balance < sum) {
//       return "Недостатньо коштів";
//     }
//     this.balance -= sum;
//     return `З вашого балансу знято  ${sum}, залишок на балансі ${this.balance}`;
//   },
// };
// console.log(bankAccount.deposite(500));
// console.log(bankAccount.withdraw(10000));
// const polina = Object.create(bankAccount);
// polina.ownerName = "Polina";
// polina.bankAccount = "001";
// polina.balance = 0;

// console.log(polina.deposite(5000));
// console.log(polina.withdraw(2000));

// const nikita = Object.create(bankAccount);
// nikita.ownerName = "Nikita";
// nikita.bankAccount = "002";
// nikita.balance = 0;

// console.log(nikita.deposite(7000));
// console.log(nikita.withdraw(5000));

// * Операції spread і rest
//TODO:============task-1=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

const arr1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "John" },
];

const arr2 = [
  { id: 2, name: "Mary" },
  { id: 4, name: "Jane" },
  { id: 5, name: "Tom" },
];
const arr3 = [...arr1, ...arr2];

const newObj = {};
// newObj["1"] = { id: 1, name: "John" };
for (const item of arr3) {
  newObj[item.id] = item;
}
// console.log(newObj);
// console.log(Object.values(newObj));
