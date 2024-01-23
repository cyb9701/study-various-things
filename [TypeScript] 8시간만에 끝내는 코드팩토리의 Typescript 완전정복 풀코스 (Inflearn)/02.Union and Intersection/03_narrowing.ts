/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로 논리적으로 유추할 수 있게 되는걸 의미한다.
 */

/**
 * Narrowing 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) In Operator Narrowing
 * 6) instanceof Narrowing
 * 7) Discrimated Union Narrowing (차별된 유니언 내로잉)
 * 8) Exhaustiveness checking
 */

// 1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString: number | string = '아이유';
numberOrString; // string

// 2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 123 : '아이유';
numberOrString; // string | number

if (typeof numberOrString === 'string') {
  numberOrString; // string
} else {
  numberOrString; // number
}

// 3) Truthiness Narrowing
let nullOrStringList: null | string[] = Math.random() > 0.5 ? null : ['아이유'];

if (nullOrStringList) {
  nullOrStringList; // string[]
} else {
  nullOrStringList; // null
}

// 4) Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBoolean2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numberOrString2 === stringOrBoolean2) {
  numberOrString2; // string
  stringOrBoolean2; // string
} else {
  numberOrString2; // string | number
  stringOrBoolean2; // string | true
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number') {
  numberOrStringOrNull; // number
} else {
  numberOrStringOrNull; // string | null
}

// 5) In Operator Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
};

let dog: Dog = {
  name: '강아지',
  type: '진돗개',
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

console.log('name' in human); // true
console.log('name2' in human); // false

if ('type' in humanOrDog) {
  humanOrDog; // Dog
} else {
  humanOrDog; // Human
}

// 6) instanceof Narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
  dateOrString; // Date
} else {
  dateOrString; // string
}

// 7) Discrimated Union Narrowing (차별된 유니언 내로잉)
interface Animal {
  type: 'dog' | 'human';
  height?: number;
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? { type: 'human', height: 177 }
    : {
        type: 'dog',
        breed: '진돗개',
      };

if (animal.type === 'human') {
  animal.height; // number | undefined
} else {
  animal.height; // number | undefined
  animal.breed; // string | undefined
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog';
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;
let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? { type: 'human', height: 177 }
    : {
        type: 'dog',
        breed: '진돗개',
      };

if (humanOrDog2.type === 'human') {
  humanOrDog2; // Human2
} else {
  humanOrDog2; // Dog2
}

// 8) Exhaustiveness checking
switch (humanOrDog2.type) {
  case 'human':
    humanOrDog2; // Human2
    break;
  case 'dog':
    humanOrDog2; // Dog2
    break;
  default:
    humanOrDog2; // never
    break;
}
