/**
 * Multi Dimension Array
 */

/**
 * 1) one dimension
 * [1, 2, 3]
 *
 * 2) two dimension
 * [[1, 2, 3]]
 *
 * 3) three dimension
 * [[[1, 2, 3]]]
 */
const number2DArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const string2DArray = [
  ['1', '2', '3'],
  ['4', '5', '6'],
]; // TYPE: string[][]

const stringAndNumberArray: (number | string)[][] = [
  [1, '2', 3],
  ['4', 5, '6'],
];

let stringArrayOrNumberArray: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  // ['1', '2'], // ERROR
];
stringArrayOrNumberArray = [
  ['1', '2', '3'],
  ['4', '5', '6'],
];

for (let arr of number2DArray) {
  arr; // TYPE: number[]

  for (let item of arr) {
    item; // TYPE: number;
  }
}
