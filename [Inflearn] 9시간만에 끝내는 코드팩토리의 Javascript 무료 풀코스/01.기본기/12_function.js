/**
 * Function
 * 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고 싶다면 어떻게 해야할까요?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * D: Don't
 * R: Repeat
 * Y: Yourself
 */
function calculate1() {
  console.log((((2 * 10) / 2) % 3).toString());
}
calculate1();

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 실제 입력하는 값는 Argument라고 한다.
 */
function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}
calculate(4);

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

function multiply2(x, y = 10) {
  console.log(x * y);
}
multiply2(2, 4);
multiply2(2);

/**
 * 반환받기
 * return 받기
 */
function multiply3(x, y) {
  return x * y;
}
const result1 = multiply3(2, 40);
console.log(result1);

/**
 * Arrow 함수
 */
const multiply4 = (x, y) => {
  return x * y;
};
console.log(multiply4(1, 2));

const multiply5 = (x, y) => x * y;
console.log(multiply5(2, 3));

const multiply6 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z:${z}`;
console.log(multiply6(2)(5)(7));

function multiply7(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z:${z}`;
    };
  };
}
console.log(multiply6(5)(4)(3));

const multiplyTwo = function (x, y) {
  return x * y;
};
console.log(multiplyTwo(1, 10));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log(multiplyThree(1, 2, 3));

const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8));

/**
 * immediately invoked function
 */
(function (x, y) {
  console.log(x * y);
})();

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
