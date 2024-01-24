/**
 * Generic in Promis
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  });
};
const runner = async function () {
  const result = await afterTwoSeconds(); // TYPE: unknown
  console.log(result);
};
runner();

const afterOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  });
};
const runner2 = async function () {
  const result = await afterOneSecond(); // TYPE: string
  console.log(result);
};
runner2();

const runner3 = async function () {
  return '123123';
};
runner3(); // TYPE: Promise<string>
