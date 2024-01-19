/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티이다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}
console.log(IdolModel.prototype); // {}
console.dir(IdolModel.prototype, { showHidden: true });
// <ref *1> {
//   [constructor]: [Function: IdolModel] {
//     [length]: 2,
//     [name]: 'IdolModel',
//     [arguments]: null,
//     [caller]: null,
//     [prototype]: [Circular *1]
//   }
// }

// circular reference
console.log(IdolModel.prototype.constructor == IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype == IdolModel.prototype); // true

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); // {}
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log(yuJin.toString()); // [object Object]
console.log(Object.prototype.toString()); // [object Object]

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}
const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2003);

console.log(yuJin2.sayHello()); // 안유진이 인사를 합니다.
console.log(wonYoung2.sayHello()); // 장원영이 인사를 합니다.
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}
IdolModel3.prototype.sayHello = () => {
  return `${this.name}이 인사를 합니다.`;
};

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2003);

console.log(yuJin3.sayHello()); // 안유진이 인사를 합니다.
console.log(wonYoung3.sayHello()); // 장원영이 인사를 합니다.
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true
console.log(yuJin3.hasOwnProperty('sayHello')); // false

/**
 * Override
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = () => {
    return '안녕하세요 저는 인스턴스의 메서드입니다.';
  };
}

IdolModel4.prototype.sayHello = function () {
  return '안녕하세요 저는 prototype 메서드입니다.';
};
const yuJin4 = new IdolModel4('안유진', 2003);
console.log(yuJin4.sayHello()); // 안녕하세요 저는 인스턴스의 메서드입니다.

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel5(name, year) {
  this.name = name;
  this.year = year;
}
IdolModel5.prototype.sayHello = function () {
  return `${this.name} 인사를 합니다.`;
};

function FemaleIdolModel5(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}가 춤을 춥니다.`;
  };
}

const gaEul = new IdolModel5('가을', 2004);
const ray = new FemaleIdolModel5('레이', 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel5.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel5.prototype); // true

console.log(gaEul.sayHello()); // 가을 인사를 합니다.
console.log(ray.dance()); // 레이가 춤을 춥니다.
// console.log(ray.sayHello()); // TypeError: ray.sayHello is not a function

Object.setPrototypeOf(ray, IdolModel5.prototype);
console.log(ray.sayHello());

console.log(ray.constructor === FemaleIdolModel5); // false
console.log(ray.constructor === IdolModel5); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel5.prototype); // false
console.log(FemaleIdolModel5.prototype === IdolModel5.prototype); // false

FemaleIdolModel5.prototype = IdolModel5.prototype;
const eSeo = new FemaleIdolModel5('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel5.prototype); // true
console.log(Object.getPrototypeOf(eSeo) === IdolModel5.prototype); // true
console.log(FemaleIdolModel5.prototype === IdolModel5.prototype); // true

console.log(eSeo.sayHello()); // 이서 인사를 합니다.
console.log(eSeo.dance()); // 이서가 춤을 춥니다.
