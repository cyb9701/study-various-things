/**
 * Inheritance
 */
class Parent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance() {
    console.log(`parent: ${this.name}이 춥을 춥니다`);
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  sing() {
    console.log(`child: ${this.name}이 노래를 부릅니다`);
  }
}

const aaa = new Parent('a');
const bbb = new Child('b', 10);
aaa.dance();

bbb.dance();
bbb.sing();

let person: Parent;
person = aaa;
person = bbb;

let person2: Child;
person2 = bbb;
// person2 = aaa; // ERROR

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number) {
    super(name);
    this.age = age;
  }
}

const aaa2 = new Parent2('aaa');
const bbb2 = new Child2('bbb', 10);

let child: Child2;
child = bbb2;
child = aaa2; // age가 optional이라서 구조가 똑같다고 판단하여 할당이 가능하다.
