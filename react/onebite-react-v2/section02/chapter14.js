// 비동기 작업 처리하기.
// 3. async & await.
//
// [assets/pdf/2섹션-JavaScript 심화.pdf]

// async.
// 어떤 함수를 비동기 함수로 만들어주는 키워드.
// 함수가 Promise를 반환하도록 변환해주는 키워드.
const getData = async () => {
  // return {
  //   name: 'choi',
  //   age: 28,
  // };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'choi',
        age: 28,
      });
    });
  });
};
console.log('🍀chapter14:15🍀', getData()); // Log: Promise {<fulfilled>: {…}}.

// await.
// async 함수 내부에서만 사용이 가능 한 키워드.
// 비동기 함수가 다 처리되기를 기다리는 역할.
const printData = async () => {
  const data = await getData();
  console.log('🍀chapter14:32🍀', data);
};
