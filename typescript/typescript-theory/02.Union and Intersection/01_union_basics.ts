/**
 * Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;
let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

type StateTypes = 'DONE' | 'LOADING' | 'ERROE';
let state: StateTypes = 'DONE';
state = 'ERROE';
// state = 'INITIAL';

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트.
type StringListOrBooleanList = string[] | boolean[];
let stringListOrBooleanList: StringListOrBooleanList = [
  '아이유',
  '김고은',
  '박소담',
];
stringListOrBooleanList = [true, false, false];
// stringListOrBooleanList = ['아이유', true];

// string 또는 number로 구성된 리스트.
type StringOrNumberList = (string | number)[];
let stringOrNumberList: StringOrNumberList = ['아이유', '김고은', '박소담'];
stringOrNumberList = [1, 2, 3];
stringOrNumberList = ['아이유', 1, 2, 3, 4];

/**
 * Interface로 사용하는 union
 */
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;
let animalOrHuman: AnimalOrHuman = {
  name: '코드팩토리',
  age: 32,
  address: '대한민국',
};
console.log(animalOrHuman);

animalOrHuman = {
  name: '오리',
  age: 9,
};
console.log(animalOrHuman);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};

type PersonOrCat = Person | Cat;

let personOrCat: PersonOrCat = {
  name: '코드팩토리',
  age: 32,
};
personOrCat = {
  breed: 'Yorkshire Terrier',
  country: '영국',
};
personOrCat = {
  name: '코드팩토리',
  age: 32,
  breed: 'Yorkshire Terrier',
};
personOrCat = {
  name: '코드팩토리',
  age: 32,
  breed: 'Yorkshire Terrier',
  country: '영국',
};
// personOrCat = {
//   name: '코드팩토리',
//   // age: 32,
//   breed: 'Yorkshire Terrier',
//   // country: '영국',
// };
console.log(personOrCat);
