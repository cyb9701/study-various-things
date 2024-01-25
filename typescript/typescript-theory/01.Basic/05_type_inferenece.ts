/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;
// booleanType = 'false'

const constStringType: 'const string' = 'const string';
const constBooleanType: true = true;

let yuJin = {
  name: '안유진',
  year: 2003,
};
const yuJin2 = {
  name: '안유진',
  year: 2003,
};
yuJin2.name = '코드팩토리';
console.log(yuJin2);

const yuJin3 = {
  name: '안유진' as const,
  year: 2003 as const,
};
// yuJin3.name = '코드팩토리';

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, 4, '5', '6'];

// numbers.push('6');
numbers.push(6);

const number: number = numbers[0];
const nos: string | number = numbersAndString[0];
const nos2 = numbersAndString[100]; // undefined

/**
 * Tuple
 */
// read only
const twoNumbers = [1, 2, 3] as const;
// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0]; // 1
// const first2 = twoNumbers[5]; // Error: has no element at index 5
