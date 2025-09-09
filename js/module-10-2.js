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
