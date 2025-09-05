// export function calculateTotalExpenses(arr) {
//   //   let total = 0;
//   //   arr.forEach((item) => {
//   //     total += item.amount;
//   //   });
//   //   return total;
//   return arr.reduce((acc, item) => {
//     return acc + item.amount;
//   }, 0);
// }

export const calculateTotalExpenses = (arr) =>
  arr.reduce((acc, item) => acc + item.amount, 0);

export const getExpensesByCategory = (arr, category) =>
  arr.filter((item) => item.category === category);
