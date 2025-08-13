//TODO:=========task-1=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку
// за допомогою циклу for і for..of.const str = 'JavaScript, HTML, CSS, React';

const str = "JavaScript, HTML, CSS, React";
const strArray = str.split(",");
// console.log(strArray);

// for (let i = 0; i < strArray.length; i += 1){
// console.log(strArray[i]);
// }

// for (const word of strArray) {
//   console.log(word);
// }
//TODO:=========task-2=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.

const message = "JavaScript is a popular programming language.";

const res = message.toLowerCase().split(" ").join("-");
// console.log(res);
const wordCount = message.split(" ").length;
// console.log(wordCount);

//TODO:=========task-3=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

const wordsArray = ["JavaScript", "HTML", "CSS", "React"];
const substring = "S";
// console.log("J-0 a-1 v-2 a-3 S-4 cript".indexOf("W"));
const filteredArray = [];

// for (const element of wordsArray) {
//   if (element.includes(substring)) {
//     filteredArray.push(element);
//   }
// }
// console.log(filteredArray);

// for (const element of wordsArray) {
//   // if (element.indexOf(substring) !== -1) {    // ("JavaScript".indexOf("S") = -1) !== (-1)
//   //   filteredArray.push(element); // filteredArray.push("JavaScript") = > filteredArray = ["JavaScript"]
//   // }
//   console.log("Початок ітерації циклу");
//   console.log(
//     `Ітерація циклу ${wordsArray.indexOf(element)} дає елемент ${element}`
//   );

//   if (element.indexOf(substring) === -1) {
//     console.log("Спрацювала умова");
//     continue;
//   }

//   filteredArray.push(element);
//   console.log("Кінець ітерації циклу");
// }

// console.log(
//   `Масив елементів, що містять підстроку substring: ${substring} - ${
//     filteredArray.join(", ") || "Відсутня"
//   }`
// );
