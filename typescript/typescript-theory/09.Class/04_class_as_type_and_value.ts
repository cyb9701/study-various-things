/**
 * Class as Type and Value
 */
class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `${this.name}가 짖습니다`;
  }
}

let dog = new Dog('ddddoggggg'); // TYPE: Dog
console.log(dog.bark());
// dog = 'ddog'; // ERROR

dog = {
  name: 'doggggggggg',
  bark() {
    return `${this.name}가 짖습니다`;
  },
};
dog; // TYPE: Dog
