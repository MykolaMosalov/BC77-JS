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
