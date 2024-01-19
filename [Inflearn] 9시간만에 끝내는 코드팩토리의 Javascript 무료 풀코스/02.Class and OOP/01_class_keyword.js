/**
 * Class Keyword
 */
class IdolModel {
  name = '안유진';
  year = 2003;
}
const yuJin = new IdolModel();
console.log(yuJin.name);

class IdolModel1 {
  // name;
  // year;

  // constructor: 생성자
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // function
  sayName() {
    return `안녕하세요 ${this.name}입니다`;
  }
}
const yuJin1 = new IdolModel1('안유진', 2003);
console.log(yuJin1); // IdolModel1 { name: '안유진', year: 2003 }
console.log(yuJin1.sayName()); // 안녕하세요 안유진입니다.

console.log(typeof IdolModel); // function
console.log(typeof yuJin1); // object
