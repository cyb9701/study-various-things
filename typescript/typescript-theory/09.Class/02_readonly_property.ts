/**
 * readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const idol = new Idol('a', 1);
idol.name;
idol.age;
// idol.name = 'b'; // ERROR
