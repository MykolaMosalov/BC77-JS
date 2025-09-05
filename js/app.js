import { getExpensesByCategory, calculateTotalExpenses } from "./expenses.js";
import expenses from "./transactions.js";
import { selectEl, outputEl } from "./refs.js";
import { renderOption, uniqCategory } from "./helpers/function.js";

selectEl.addEventListener("change", onSelectChange);
document.addEventListener("DOMContentLoaded", renderPage);

function onSelectChange(e) {
  const category = getExpensesByCategory(expenses, e.currentTarget.value);

  const total = calculateTotalExpenses(category);
  outputEl.textContent = `Загальна сума витрат по категорії ${e.currentTarget.value}: ${total} грн`;
}

function renderPage(e) {
  const uniqOptions = uniqCategory(expenses);

  renderOption(uniqOptions, selectEl);
}

// const totalExpenses = calculateTotalExpenses(expenses);
// console.log();

// const foodExpenses = getExpensesByCategory(expenses, "Їжа");
// console.log(`Витрати на їжу: ${calculateTotalExpenses(foodExpenses)}`);
