/**
 * Problems with Array in JS
 */
const numbers = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2'];
// strings.push(1); // ERROR

let stringsOrNumbers: (string | number)[] = [1, '2', 3];

let stringArrayOrNumberArray: string[] | number[] =
  Math.random() > 0.5 ? [1, 2, 3] : ['1', '2', '3'];

let stringOrNumberArray: string | number[] =
  Math.random() > 0.5 ? '1' : [1, 2, 3];

let boolsArray = [true, false, false];
boolsArray.push(true);

const onlyStrings = ['1', '2'];
const onlyNumbers = [1, 2];
for (let i = 0; i < onlyStrings.length; i++) {
  let item = onlyStrings[i]; // TYPE: string
}
for (let i = 0; i < onlyNumbers.length; i++) {
  let item = onlyNumbers[i]; // TYPE: number
}
let number3 = onlyNumbers[0]; // TYPE: number
let number4 = onlyNumbers[999999]; // TYPE: number
