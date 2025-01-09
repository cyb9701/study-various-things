// 배열 메서드.
// 5가지의 배열 변형 메서드.

// 1. filter.
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환.
let arr1 = [
  { name: 'choi', age: 10 },
  { name: 'lee', age: 10 },
  { name: 'kim', age: 30 },
];
const tenAgePeople = arr1.filter((item) => {
  return item.age === 10;
});
console.log('🍀chapter09:14🍀', tenAgePeople); // Log: [{ name: 'choi', age: 10 },{ name: 'lee', age: 10 }]

// 2. map.
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고, 그 결과값들을 모아서 새로운 배열로 반환.
let arr2 = [1, 2, 3];
const newArr2 = arr2.map((item, index, arr) => {
  return item * 2;
});
console.log('🍀chapter09:22🍀', newArr2); // Log: [2,4,6].

const newArr3 = arr1.map((item, index, array) => {
  return item.age;
});
console.log('🍀chapter09:27🍀', newArr3); // Log: [10,10,20];

// 3. sort.
// 배열을 사전순으로 정렬하는 메서드.
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log('🍀chapter09:33🍀', arr3); // Log: ['a','b','c'].

let arr4 = [10, 3, 5];
arr4.sort();
console.log('🍀chapter09:37🍀', arr4); // Log: [10,3,5].
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞으로 와라.
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라.
    return -1;
  } else {
    // 동일하면 바꾸지 마라.
    return 0;
  }
});
console.log('🍀chapter09:37🍀', arr4); // Log: [3,5,10].

// 4. toSorted.
// 정렬된 새로운 배열을 반환하는 메서드.
let arr6 = ['c', 'a', 'b'];
const sorted = arr6.toSorted();
console.log('🍀chapter09:56🍀', arr6, sorted); // Log: ['c','a','b'] ['a','b','c'].

// 5. join.
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드.
let arr7 = [1, 2, 3];
const joined1 = arr7.join();
const joined2 = arr8.join('**');
console.log('🍀chapter09:62🍀', joined1, joined2); // Log: [1,2,3] [1**2**3].
