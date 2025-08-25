// //TODO:=========task-01=================
// // Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить
// // повну інформацію про користувача.

// const user = {
//   userName: "Roman",
//   lastName: "Knyazhyk",
//   age: 32,
//   email: "romanknyazhyk@gmail.com",

//   showUser() {
//     console.log(`Hello ${this.userName}! Youre are ${this.age} old. `);
//   },

//   modifyUser(key, value) {
//     if (key !== "userName" && key !== "lastName") {
//       return "Key`s are not valid";
//     }

//     if (value[0] === value[0].toUpperCase() && value.length >= 3) {
//       this[key] = value;
//     }
//   },
// };

// // user.showUser();
// console.log(user);
// user.modifyUser("userName", "Igor");
// user.modifyUser("heigth", "180");
// user.modifyUser("lastName", "Ivan");
// console.log(user);

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові
//(потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням

// function addProperty(key, value) {
//   this[key] = value;
// }

const user = {
  userName: "Roman",
  lastName: "Knyazhyk",
  age: 32,
  email: "romanknyazhyk@gmail.com",

  showUser() {
    console.log(`Hello ${this.userName}! Youre are ${this.age} old. `);
  },

  modifyUser(key, value) {
    if (key !== "userName" && key !== "lastName") {
      return "Key`s are not valid";
    }

    if (value[0] === value[0].toUpperCase() && value.length >= 3) {
      this[key] = value;
    }
  },
};
// user.addProperty = addProperty;
// user.addProperty("friends", ["mango", "bob"]);
// user.addProperty("hobby", "footbal");
// console.log(user);

// const newUser = {};
// newUser.addProperty = addProperty;
// newUser.addProperty("username", "Roman");
// console.log(newUser);

//TODO:=========task-04=================
//  Викликати метод user.showUser() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})
// const obj = Object.create(user);
const obj = {
  userName: "Bob",
  lastName: "Lasso",
  age: 50,
  email: "BodLasso@gmail.com",
};
// console.log(obj);
// user.showUser.call(obj);
// user.showUser();
