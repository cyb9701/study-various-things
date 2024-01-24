/**
 * Tuple
 */
let numbers: number[] = [1, 2, 3, 4];

let numberAndStringTuple: [number, string] = [1, '2']; // 다른 값도 추가하지 못한다.
numberAndStringTuple.push(3); // 반대로 push는 정상 작동한다.
console.log(numberAndStringTuple); // [1, '2', 3]

let unmodifiableTuple: readonly [number, string] = [1, '2'];
// unmodifiableTuple.push(); // ERROR

/**
 * Tuple 유추하기
 */
let numbers1 = [1, 2, 3]; // TYPE: number[]
let numbersTuple = [1, 2, 3] as const; // TYPE: readonly [1, 2, 3]

let numberArrays = [...numbers1, ...numbersTuple];

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = ['1', 2];

/**
 * Assigning Tuple to Tuple
 *
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['1', '2'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; // ERROR
// let tuple4: [number, number, number] = tuple2; // ERROR
let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let stringTuple: [string, string] = ['1', '2'];

let stringArray: string[] = stringTuple;
// let stringTuple2:[string,string]=stringArray; // ERROR

/**
 * Multi Dimensional Tuple
 */
const array2D = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]; // TYPE: (string | number)[][]
const tuple2D: [string, number][] = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
