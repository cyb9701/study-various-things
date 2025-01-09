// 1. 배열 순회.
let arr1 = [1, 2, 3];

// 1-1. 배열 인덱스.
for (let i = 0; i < arr.length; i++) {
  console.log('🍀chapter06:6🍀', arr[i]);
}

// 1-2. for of 반복문.
for (let item of arr1) {
  console.log('🍀chapter06:12🍀', item);
}

// 2. 객체 순회.
let person = {
  name: 'choi',
  age: 28,
  hobby: 'scoccer',
};

// 2-1. Object.keys 사용.
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환.
let keys = Object.keys(person);
for (let key of keys) {
  console.log('🍀chapter06:25🍀', key, person[key]);
}

// 2-2. Object.values 사용.
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환.
let values = Object.values(person);
for (let value of values) {
  console.log('🍀chapter06:31🍀', value);
}

// 2-3. for in.
for (let key in person) {
  console.log('🍀chapter06:38🍀', key, person[key]);
}
