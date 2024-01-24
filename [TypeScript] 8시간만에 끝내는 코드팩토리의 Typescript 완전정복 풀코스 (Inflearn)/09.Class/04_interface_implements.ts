/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal {
  name: string;
  age: number;
  addition: boolean;

  constructor(name: string, age: number, addition: boolean) {
    this.name = name;
    this.age = age;
    this.addition = addition;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다`;
  }
}

let animal: any = new Dog('a', 1, true);

function isInstanceOfAnimal(object: any): object is Animal {
  return 'jump' in object;
}

if (isInstanceOfAnimal(animal)) {
  animal; // TYPE: Animal
} else {
  animal; // TYPE: any
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet {
  name: string;
  age: number;
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다`;
  }
  bark(): void {
    console.log('bark!!!!!');
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
  name: string;
  age: number;
  legsCount: number;

  constructor(name: string, age: number, legsCount: number) {
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다`;
  }
  bark(): void {
    console.log('bark!!!!!');
  }
}

// 예외 케이스.
interface WrongInterface1 {
  name: string;
}

interface WrongInterface2 {
  name: string;
}

// class Person implements WrongInterface1, WrongInterface2 {
//   name: string;
//   name: number;
// }
// ERROR

/**
 * interface implements
 */
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor {
  new (name: string, age: number): Idol;
}

function creatIdol(constructor: IdolConstructor, name: string, age: number) {
  return new constructor(name, age);
}

console.log(creatIdol(Idol, 'a', 31));
