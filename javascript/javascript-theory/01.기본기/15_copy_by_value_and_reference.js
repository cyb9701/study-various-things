/**
 * copy by value: 값에 의한 전달
 * copy by reference: 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value이다.
 * 2) 객체는 copy by reference이다.
 */
let original = '안녕하세요';
let clone = original;
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요

clone += '안유진입니다.';
console.log(original); // 안녕하세요
console.log(clone); // 안녕하세요안유진입니다.

console.log(original === clone); // false

let originalObj = {
  name: '안유진',
  group: '아이브',
};
let cloneObj = originalObj;
console.log(originalObj); // { name: '안유진', group: '아이브' }
console.log(cloneObj); // { name: '안유진', group: '아이브' }

originalObj['group'] = '코드팩토리';
console.log(originalObj); // { name: '안유진', group: '코드팩토리' }
console.log(cloneObj); // { name: '안유진', group: '코드팩토리' }

cloneObj['name'] = '이름입니다.';
console.log(originalObj); // { name: '이름입니다.', group: '코드팩토리' }
console.log(cloneObj); // { name: '이름입니다.', group: '코드팩토리' }

console.log(originalObj === cloneObj); // true

const yuJin1 = {
  name: '안유진',
  group: '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 = {
  name: '안유진',
  group: '아이브',
};
console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 */
const yuJin4 = {
  ...yuJin1,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin1); // false

const yuJin5 = {
  year: 2003,
  ...yuJin1,
};
console.log(yuJin5); // { year: 2003, name: '안유진', group: '아이브' }

const yuJin6 = {
  name: '코드팩토리',
  ...yuJin1,
};
console.log(yuJin6); // { name: '안유진', group: '아이브' }
const yuJin7 = {
  ...yuJin1,
  name: '코드팩토리',
};
console.log(yuJin7); // { name: '코드팩토리', group: '아이브' }
