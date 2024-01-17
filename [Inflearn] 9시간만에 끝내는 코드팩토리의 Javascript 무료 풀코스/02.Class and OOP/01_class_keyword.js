/**
 * Class Keyword
 */
class IdolModel {
  name = '안유진';
  year = 2003;
}
const yuJin = new IdolModel();
console.log(yuJin.name);

// constructor: 생성자
class IdolModel1 {
  // name;
  // year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const yuJin1 = new IdolModel1('안유진', 2003);
console.log(yuJin1); // IdolModel1 { name: '안유진', year: 2003 }
