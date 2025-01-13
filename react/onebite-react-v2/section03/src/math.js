// math 모듈.

// 1. Common JS Module 시스템.
const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// module.exports = {
//   add: add,
//   sub,
// };

// 2. ES Module 시스템.
// Common JS Module 과 동시에 사용 불가능.
// [section03/package.json] "type": "module" 으로 설정.

export const add2 = (a, b) => {
  return a + b;
};

export const sub2 = (a, b) => {
  return a - b;
};

// export { add2, sub2};

const multiply = (a, b) => {
  return a * b;
};
export default multiply;
