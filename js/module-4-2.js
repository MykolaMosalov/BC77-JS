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

const cart = {
  productsList: [
    { name: 'phone', price: 20000 },
    { name: 'tablet', price: 28000 },
  ],

  calculateTotal() {
    let totalSum = 0;
    for (const product of this.productsList) {
      totalSum += product.price;
    }
    return `Сума до сплати ${totalSum}`;
  },
};

console.log(cart.calculateTotal());
