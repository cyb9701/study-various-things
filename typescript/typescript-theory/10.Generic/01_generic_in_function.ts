/**
 * Generic 함수에서 사용하기
 */
function whatValue(value: any) {
  return value;
}
const value = whatValue('test');

function genericWhatValue<T>(value: T): T {
  return value;
}
const genericValue = genericWhatValue<string>('test'); // TYPE: string

let test: number = 1;
const genericValue2 = genericWhatValue(test); // TYPE: number

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
  return { x, y, z };
}
const multipleGenericsResult = multipleGenerics<number, number, string>(
  1,
  2,
  '3'
);

function getTuple<X, Y>(value1: X, value2: Y) {
  return [value1, value2] as const;
}
const tuple = getTuple(true, 100); // TYPE: readonly [boolean, number]

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Car {
  brand: string;
  codeName: string;

  constructor(brand: string, codeName: string) {
    this.brand = brand;
    this.codeName = codeName;
  }
}

function instantiator<T extends { new (...args: any[]): {} }>(
  constructor: T,
  ...args: any[]
) {
  return new constructor(...args);
}
console.log(instantiator(Idol, 'aaa', 23)); // Idol { name: 'aaa', age: 23 }
