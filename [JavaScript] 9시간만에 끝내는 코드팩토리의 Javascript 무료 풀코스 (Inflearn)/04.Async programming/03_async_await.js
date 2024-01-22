/**
 * Async await
 */
const getPromise = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('end');
    }, second * 1000);
  });

async function runner() {
  try {
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(3);
    console.log(result3);
    const result4 = await getPromise(4);
    console.log(result4);
  } catch (e) {
    console.log('---error---');
    console.log(e);
  }
}
// runner();
// console.log('execute end');

const runner1 = async () => {
  const result = await getPromise(2);
  console.log(result);
};
runner1();
