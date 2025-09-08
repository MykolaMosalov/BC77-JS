const dateContainer = document.querySelector(".js-container");
const monthEl = dateContainer.querySelector(".js-month");
const dayEl = dateContainer.querySelector(".js-day-number");
const weekdayEl = dateContainer.querySelector(".js-day");
const yearEl = dateContainer.querySelector(".js-year");

const currentDate = new Date();

const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });

const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });

const weekday = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });

const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });

monthEl.textContent = month;
dayEl.textContent = day;
weekdayEl.textContent = weekday;
yearEl.textContent = year;
