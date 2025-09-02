//TODO:=========task-01=======Accordion==========
/**
 * Викоритовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

const accordionList = document.querySelector(".js-accordion-list");

accordionList.addEventListener("click", onListClick);
function onListClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  e.target.nextElementSibling.classList.toggle("active");
}

//TODO:=========task-02=======Pagination==========
/**
 * Викоритовуй шаблон пагінації з файлу html для розробки функціоналу пагінатора.
 * Використовуй поширення подій.Додавай клас`active` на поточну сторінку. Створи допоміжну функцію`updateActivePage`, яка повинна обновляти активний клас.
 * Функція`handleClick`повинна викликатися коли відбувається клік на елементі`pagination`.
 */

const paginationListEl = document.querySelector(".js-pagination");

console.log(paginationListEl);

paginationListEl.addEventListener("click", onPaginationClick);

function onPaginationClick(event) {
  if (event.target.nodeName !== "LI") {
    return;
  }

  const active = paginationListEl.querySelector(".active");
  const typeOfDataSet = event.target.dataset.type;

  if (
    typeOfDataSet === "next" &&
    active.nextElementSibling.dataset.type === "page"
  ) {
    changeActionState("nextElementSibling", "next");
  }

  if (
    typeOfDataSet === "prev" &&
    active.previousElementSibling.dataset.type === "page"
  ) {
    changeActionState("previousElementSibling", "prev");
  }
  if (typeOfDataSet === "page") {
    changeActionState("previousElementSibling", "page");
  }

  function changeActionState(className, type) {
    console.log(type);
    if (type !== "next" && type !== "prev") {
      active.classList.remove("active");
      event.target.classList.add("active");
      console.log("Worked If");
      return;
    }

    active.classList.remove("active");
    active[className].classList.add("active");
  }
}
