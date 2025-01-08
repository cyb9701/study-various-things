// 1. 상수 객체.
// 객체의 프로퍼티를 추가, 수정, 삭제가 가능하다.
const person = {
  name: 'choi',
  team: 'teamplayground',
  age: 28,
};

person.nickname = 'aaa';
person.age = 1;
delete person.team;

// 2. 메서드.
// 값이 함수인 프로퍼티를 말함.
const obj1 = {
  name: 'choi',
  // 메서드.
  sayHi1: function () {
    console.log('🍀chapter16:19🍀', 'hi');
  },
  sayHi2: () => {
    console.log('🍀chapter16:19🍀', 'hi');
  },
  // 메서드 선언.
  sayHi3() {
    console.log('🍀chapter16:19🍀', 'hi');
  },
};

person.sayHi1();
person['sayHi3']();
