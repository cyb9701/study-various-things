// 1. 객체 생성.
let obj1 = new Object(); // 객체 생성자.
let obj2 = {}; // 객체 리터럴 (대부분 사용).

// 2. 객체 프로퍼티 (객체 속성).
let person = {
  name: 'choi',
  team: 'teamplayground',
  age: 28,
  10: 20,
  11: '21',
  'animal cat': true,
};

// 3. 객체 프로퍼티를 다루는 방법.
// 3-1. 특정 프로퍼티에 접근 (접 표기법, 괄호 표기법)
let name = person.name;
let age = person['age'];

// 3-2. 새로운 프로퍼티를 추가하는 방법.
person.job = 'developer';
person['favoriteFood'] = '떡볶이';
console.log('🍀chapter15:23🍀', person);

// 3-3. 프로퍼티를 수정하는 방법.
person.job = 'ceo';
console.log('🍀chapter15:27🍀', person);

// 3-4. 프로퍼티를 삭제하는 방법.
delete person.job;
delete person['favoriteFood'];
console.log('🍀chapter15:31🍀', person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = 'name' in person;
console.log('🍀chapter15:36🍀', result1);
