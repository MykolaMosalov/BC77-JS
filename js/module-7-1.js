// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const bodyEl = document.querySelector("body");

const titleEl = document.querySelector("#title");

const listEl = document.querySelector(".list");

const itemEl = document.querySelectorAll("[data-topic]");

// console.log(bodyEl);
// console.log(titleEl);
// console.log(listEl);
// console.log(itemEl);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const itemFirstEl = document.querySelector("[data-topic]");
// console.log(itemFirstEl);

// const itemLastEl = itemEl[itemEl.length - 1];
const itemLastEl = listEl.lastElementChild;
// console.log(itemLastEl);

// console.log(titleEl.nextElementSibling);

const allTitle = document.querySelectorAll("h3");
console.log(allTitle);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// allTitle.forEach((h3) => {
//   h3.classList.add("active");
// });

// const navEl = document.querySelector("[data-topic='navigation']");
// console.log(navEl);

// navEl.style.backgroundColor = "yellow";
