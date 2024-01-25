/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase(); // ERROR
// (number as any).toUpperCase(); // ERROR

const multiplyTwo = (x: number, y: number) => {
  return x * y;
};
let arg1: any = 'code factory';
let arg2: any = true;
// multiplyTwo(arg1, arg2); // ERROR

let ui: any = {
  name: 'iu',
  age: 30,
};
// iu.; // ERROR

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x); // ERROR
};
const callback = (x: number, y: number) => {
  return x * y;
};
callbackRunner(5, 4, callback); // 20
