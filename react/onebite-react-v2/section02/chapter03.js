// 1. 배열의 구조 분해 할당.
let arr = [1, 2, 3];

let [one1, two1, three1] = arr;
console.log('🍀chapter03:4🍀', one1, two1, three1);

let [one2, two2] = arr;
let [one3, two3, three3, four3] = arr;
console.log('🍀chapter03:9🍀', four3); // Log: undefined.
let [one4, two4, three4, four4 = 4] = arr;
let [one5, _, three5] = arr;

// 2. 객체의 구조 분해 할당.
let person = {
  name: 'choi',
  age: 28,
  hobby: 'scoccer',
};

// let { a, b, c } = person;
// console.log('🍀chapter03:21🍀', a, b, c); // Log: undefined undefined undefined.

let { age: myAge, hobby, name } = person;
console.log('🍀chapter03:24🍀', myAge, hobby, name);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법.
const funcA = (person) => {
  const { name, age, hobby } = person;
  console.log('🍀chapter03:29🍀', name, age, hobby);
};

const funcB = ({ name, age, hobby }) => {
  console.log('🍀chapter03:29🍀', name, age, hobby);
};
