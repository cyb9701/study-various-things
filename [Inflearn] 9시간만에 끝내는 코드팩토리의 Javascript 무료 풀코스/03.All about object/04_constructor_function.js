/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = () => {
    return `${this.name}이 춤을 춥니다`;
  };
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // IdolModel { name: '안유진', year: 2003, dance: [Function (anonymous)] }
console.log(yuJin.dance()); // 안유진이 춤을 춥니다

const yuJin1 = IdolModel('안유진', 2003);
console.log(yuJin1); // undefined

function IdolModel2(name, year) {
  if (!new.target) {
    return new IdolModel2(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = () => {
    return `${this.name}이 춤을 춥니다`;
  };
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2); // IdolModel2 { name: '안유진', year: 2003, dance: [Function (anonymous)] }

const yuJin3 = IdolModel2('안유진', 2003);
console.log(yuJin3); // IdolModel2 { name: '안유진', year: 2003, dance: [Function (anonymous)] }

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};
const yuJin5 = new IdolModelArrow('안유진', 2003); // TypeError: IdolModelArrow is not a constructor
