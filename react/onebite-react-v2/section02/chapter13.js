// 비동기 작업 처리하기.
// 2. Promise.
//
// [assets/pdf/2섹션-JavaScript 심화.pdf]

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수.
  // executor.

  setTimeout(() => {
    const result = 'hi';
    console.log('🍀chapter13:11🍀', result);

    // 성공 상태로 변경.
    resolve(result);

    // 실패 상태로 변경.
    reject('실패 이유....');
  }, 2000);
});

// 활용 방법 01.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject('num이 숫자가 아닙니다.');
    }
  }, 2000);
});

// 체이닝.
promise1
  .then((value) => {
    console.log('🍀chapter13:36🍀', value);
  })
  .catch((error) => {
    console.log('🍀chapter13:40🍀', error);
  });

// 활용 방법 02.
const addTen = (num) => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = 10;

      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다.');
      }
    }, 2000);
  });

  return promise2;
};

// const p = addTen(11);
// p.then((value) => {
//   console.log('🍀chapter13:36🍀', value);

//   const newP = addTen(value);
//   newP.then((newValue) => {
//     console.log('🍀chapter13:67🍀', newValue);
//   });
// }).catch((error) => {
//   console.log('🍀chapter13:40🍀', error);
// });
addTen(11)
  .then((value) => {
    console.log('🍀chapter13:36🍀', value);
    return addTen(value);
  })
  .then((newValue) => {
    console.log('🍀chapter13:67🍀', newValue);
  })
  .catch((error) => {
    console.log('🍀chapter13:40🍀', error);
  });
