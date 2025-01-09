// 배열 메서드.
// 5가지 요소 순회 및 탐색 메서드.

// 1. forEach.
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드.
let arr1 = [1, 2, 3];
arr1.forEach((item, index, arr) => {
  console.log('🍀chapter08:7🍀', item, index, arr);
});

let doubledArr = [];
arr1.forEach((_, index, __) => {
  doubledArr.push(item * 2);
});

// 2. includes.
// 배열에 특정 요소가 있는지 확인한는 메서드.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log('🍀chapter08:19🍀', isInclude); // Log: true.

// 3. indexof.
// 특정 요소의 인덱스를 찾아서 반환하는 메서드.
// 배열안에 원시 타입이 들어있을 때 활용.
// 얕은 비교롤 인덱스 검색.
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log('🍀chapter08:25🍀', index); // Log: 1.

let arr4 = [2, 2, 2];
console.log('🍀chapter08:28🍀', arr4.indexOf(2), arr4.indexOf(20)); // Log: 0 -1.

// 4. findIndex.
// 모든 요소를 순회하면서, 콜백 함수를 만족하는.
// 특정 요소의 인텍스를 반환하는 메서드.
// 배열안에 객체 타입이 들어있을 때 활용.
let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  if (item === 2) return true;
});
console.log('🍀chapter08:37🍀', findedIndex); // Log: 1.

const findedIndex2 = arr5.findIndex((item) => {
  return item > 2;
});
console.log('🍀chapter08:37🍀', findedIndex2); // Log: 2.

const findedIndex3 = arr5.findIndex((item) => {
  return item > 100;
});
console.log('🍀chapter08:37🍀', findedIndex3); // Log: -1.

// 5. find.
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환.
let arr6 = [{ name: 'choi' }, { name: 'lee' }];
const findedItem = arr6.findIndex((item) => {
  return item.name === 'choi';
});
console.log('🍀chapter08:61🍀', findedItem); // Log: {name: 'choi}
