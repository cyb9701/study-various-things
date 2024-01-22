/**
 * Callback
 */
function waitAndRun() {
  setTimeout(() => {
    console.log('end');
  }, 2000);
}
// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log('1 end');
    setTimeout(() => {
      console.log('2 end');
      setTimeout(() => {
        console.log('3 end');
      }, 2000);
    }, 2000);
  }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('end');
  }, 2000);
});
// timeoutPromise.then((result) => {
//   console.log('---then---');
//   console.log(result);
// });

const getPromise = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('end');
    }, second * 1000);
  });
// getPromise(3)
//   .then((result) => {
//     console.log('---first then---');
//     console.log(result);
//     return getPromise(3);
//   })
//   .then((result) => {
//     console.log('---second then---');
//     console.log(result);
//   });

const getPromise2 = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, second * 1000);
  });
// getPromise2(3)
//   .then((result) => {
//     console.log('---first then---');
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log('---first catch---');
//     console.log(result);
//   })
//   .finally(() => {
//     console.log('---finally---');
//   });

Promise.all([getPromise(1), getPromise(2), getPromise(3), getPromise2(4)])
  .then((result) => {
    console.log('---then---');
    console.log(result);
  })
  .catch((result) => {
    console.log('---catch---');
    console.log(result);
  });
