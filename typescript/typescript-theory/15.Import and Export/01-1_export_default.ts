/**
 * Export Default
 *
 * export는 파일당 한개만 가능하다.
 */
console.log('---1---');
// export default class IdolModel {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

console.log('---2---');
// const number = 10;
// export default number;

console.log('---3---');
// export default interface ICat {
//   name: string;
//   age: number;
// }

console.log('---4---');
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 10;

export default {
  IdolModel,
  number,
};
