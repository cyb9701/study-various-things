/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set name(name) {
    this.name = name;
  }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin); // IdolModel { name: '안유진', year: 2003 }
console.log(yujin.nameAndYear); // 안유진-2003

yujin.name = '장원영';
console.log(yujin.name); // 장원영

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { year: 2003 }
console.log(yuJin2.name); // 안유진

yuJin2.name = '코드팩토리';
console.log(yuJin2.name); // 코드팩토리
