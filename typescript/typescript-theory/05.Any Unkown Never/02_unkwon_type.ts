/**
 * Unknown Type
 *
 * 1) 할당 시 any 타입과 unknown 타입에만 할당이 가능하다.
 */
let anyValue: any;
anyValue = 20;
anyValue = 'iu';
anyValue = [];

let unknownValue: unknown;
unknownValue = 20;
unknownValue = 'iu';
unknownValue = [];

let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let numberType: number = anyValue;

let anyType2: any = unknownValue;
let unknownType2: unknown = unknownValue;
// let booleanType2: boolean = unknownValue; // ERROE
// let arrayType2: string[] = unknownValue; // ERROE
// let numberType2: number = unknownValue; // ERROE

anyValue.toUpperCase();
anyValue.name;

// unknownType.toUpperCase(); // ERROR
// unknownType.name; // ERROR

function isString(target: unknown): target is string {
  return typeof target === 'string';
}
let testValue: unknown;
if (isString(testValue)) {
  testValue; // TYPE: string
}

/**
 * Union Type
 */
type unknownOrString = unknown | string; // TYPE: unknown
type unknownOrNumber = unknown | number; // TYPE: unknown
type unknownOrBoolean = unknown | boolean; // TYPE: unknown
type unknownOrAny = unknown | any; // TYPE: any
type unknownOrAny2 = any | unknown; // TYPE: any

/**
 * Intersection Type
 */
type unknownAndString = unknown & string; // TYPE: string
type unknownAndNumber = unknown & number; // TYPE: number
type unknownAndBoolean = unknown & boolean; // TYPE: boolean
type unknownAndAny = unknown & any; // TYPE: any
type unknownAndAny2 = any & unknown; // TYPE: any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; // ERROR
// number1 - number2; // ERROR
// number1 * number2; // ERROR
// number1 / number2; // ERROR
number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
