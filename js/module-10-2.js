//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`hello world`);
//     }, 2000);
//   });
// }
// greet().then((responce) => {
//   console.log(responce);
// });

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 1;
      //   console.log(data);
      res(data);
    }, 1000);
  });
const getNewData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 2;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const getAnotherData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 3;
      //   console.log(data);
      res(data);
    }, 1000);
  });
const getLastData = () =>
  new Promise((res) => {
    setTimeout(() => {
      const data = 4;
      //   console.log(data);
      res(data);
    }, 1000);
  });

const newArray = [];
getData()
  .then((responce) => {
    newArray.push(responce);
    return getNewData();
  })
  .then((responce) => {
    newArray.push(responce);
    return getAnotherData();
  })
  .then((responce) => {
    newArray.push(responce);
    return getLastData();
  })
  .then((responce) => {
    newArray.push(responce);
    // console.log(newArray);
  });

Promise.all([getNewData(), getData(), getLastData(), getAnotherData()]).then(
  (responce) => {
    // console.log(responce);
  }
);

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */

function countWithDelay(delay, times, interval) {
  let count = 0;
  function logCount() {
    if (count === times) {
      return;
    }
    count += 1;
    setTimeout(logCount, interval);
    console.log(count);
  }

  creatPromise(delay, logCount);
}

function creatPromise(delay, callback) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  }).then((resolve) => callback());
}

// countWithDelay(1000, 5, 3000);

//TODO:====================04==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt("paste value");

function checkValue(value) {
  return new Promise((resolve, reject) => {
    if (isNaN(value)) {
      return reject("error");
    }
    if (value % 2 === 0) {
      setTimeout(() => {
        return resolve("even");
      }, 1000);
    }

    setTimeout(() => {
      return resolve("odd");
    }, 2000);
  });
}
checkValue(value).then(console.log).catch(console.log);
