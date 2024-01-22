/**
 * Inheritance
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemalIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다`;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다.`;
  }
}

const yuJin = new FemalIdolModel('안유진', 2003);
console.log(yuJin); // FemalIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolModel('지민', 2000);
console.log(jiMin); // MaleIdolModel { name: '지민', year: 2000 }

console.log(yuJin.dance()); // 여자 아이돌이 춤을 춥니다
console.log(yuJin.name); // 안유진
console.log(jiMin.sing()); // 남자 아이돌이 노래를 부릅니다.
console.log(jiMin.name); // 지민

console.log(yuJin instanceof IdolModel); // true
console.log(yuJin instanceof FemalIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false
