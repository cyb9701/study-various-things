/**
 * Statement and Expression (문장과 표현식)
 *
 * 함수의 표현 방식의 차이가 있다.
 * expression 방식을 권장한다.
 */
// statement
function addTwoNumber(x: number, y: number) {
  return x + y;
}

// expression
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number): number {
  return x + y;
}
function subtract(x: number, y: number): number {
  return x - y;
}
function multiply(x: number, y: number): number {
  return x * y;
}
function divide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 */
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = (x, y) => {
  return x + y;
};
const subtract2: CalculationType = (x, y) => {
  return x - y;
};
const multiply2: CalculationType = (x, y) => {
  return x * y;
};
const divide2: CalculationType = (x, y) => {
  return x / y;
};
