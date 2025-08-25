//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить
// повну інформацію про користувача.

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

// user.showUser();
console.log(user);
user.modifyUser("userName", "Igor");
user.modifyUser("heigth", "180");
user.modifyUser("lastName", "Ivan");
console.log(user);

//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові
//(потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)
