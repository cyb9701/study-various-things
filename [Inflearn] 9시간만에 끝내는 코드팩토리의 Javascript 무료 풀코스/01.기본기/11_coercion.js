/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적.
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적.
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 96

/**
 * String 타입으로 명시적 변환
 */
(99).toString();
true.toString();
Infinity.toString();

/**
 * Number 타입으로 명시적 변환
 */
parseInt('0');
parseFloat('0.99');
+'1';

/**
 * Boolean 타입으로 명시적 변환
 */

/**
 * truthy & falsy
 *
 * truthy
 * 1) true
 * 2) {}
 * 3) []
 * 4) 42
 * 5) '0'
 * 6)'false'
 * 7) new Date()
 * 8) -42
 * 9) 12n
 * 10) 3.14
 * 11) -3.14
 * 12) Infinity
 * 13) -Infinity
 *
 * falsy
 * 1) false:	키워드 false
 * 2) 0:	Number zero.(0.0, 0x0 등등 또한 해당된다)
 * 3) -0:	Number Negative zero.(-0.0, -0x0 등등 또한 해당된다)
 * 4) On:	BigInt zero. (0x0n 도 포함) BigInt negative zero는 없음에 유의하자(0n의 negative는 0n이다.)
 * 5) “”, ‘’, ``:	빈 문자열 값
 * 6) null:	어떠한 값도 없는 상태
 * 7) undefined
 * 8) NaN:	Not a Number
 * 9) document.all
 */
console.log(!'x'); // false
console.log(!!'x'); // true

console.log(!!''); // false

console.log(!!0); // false
console.log(!!'0'); // true
console.log(!!'false'); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // true
console.log(!![]); // true
