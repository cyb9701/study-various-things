/**
 * Casting
 *
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
const codefactory = 'code factory';
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase());

let sampleNuamber: any = 5;
// console.log(sampleNuamber.toUpperCase()); // TypeError
let stringVar = sampleNuamber as string;

console.log(typeof (sampleNuamber as string)); // number

let number = 5;
// console.log(number.toUpperCase());
// console.log((number as any).toUpperCase());
