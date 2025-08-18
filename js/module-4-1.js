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
human.mood = "happy";
human.hobby = "skydiving";
human["age"] = 21;
console.log(human);
