// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const bodyEl = document.querySelector("body");

// const titleEl = document.querySelector("#title");

// const listEl = document.querySelector(".list");

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
// const itemLastEl = listEl.lastElementChild;
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

const navEl = document.querySelector("[data-topic='navigation']");
// console.log(navEl);

// navEl.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

navEl.lastElementChild.textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";

document.querySelector(`[data-topic='${currentTopic}']`).style.backgroundColor =
  "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const subTitleEl = document.querySelector(".completed");

console.log(subTitleEl.parentNode.remove());

const desc = document.createElement("p");

desc.textContent = "Об'єктна модель документа (Document Object Model)";

console.log(desc);

const titleEl = document.querySelector("h1");

titleEl.after(desc);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// const li = document.createElement("li");

// const h3 = document.createElement("h3");
// h3.textContent = "Властивість innerHTML";
// const p = document.createElement("p");
// p.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// li.appendChild(h3);
// li.appendChild(p);

// console.log(li);

const listEl = document.querySelector(".list");

// listEl.append(li);

listEl.insertAdjacentHTML(
  "beforeend",
  `<li>
        <h3>Властивість innerHTML</h3>
        <p>
          Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
          використовувати рядки з тегами і дозволити браузеру зробити всю важку
          роботу
        </p>
      </li>`
);

listEl.innerHTML = "";
