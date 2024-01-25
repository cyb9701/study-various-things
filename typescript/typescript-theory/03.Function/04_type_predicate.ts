/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
  return typeof input === 'number';
}

console.log(isNumber(10)); // true
console.log(isNumber('10')); // false

// type predicate를 사용안할 경우.
function isNumberReturnBool(input: any): boolean {
  return typeof input === 'number';
}
let number: any = 5;

// 차이점.
// 결과값의 타입을 해당 타입으로 지정되면 사용하기 편하기 때문에 사용한다.
if (isNumber(number)) {
  number; // TYPE: number
}
if (isNumberReturnBool(number)) {
  number; // TYPE: any
}

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

function isDog(animal: DogOrCat): animal is Dog {
  return (animal as Dog).age !== undefined;
}

const dog: DogOrCat =
  Math.random() > 0.5
    ? {
        name: '강아지',
        age: 10,
      }
    : { name: '고양이', breed: '종류' };

if (isDog(dog)) {
  dog; // TYPE: Dog
} else {
  dog; // TYPE: Cat
}
