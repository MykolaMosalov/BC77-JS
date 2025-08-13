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
