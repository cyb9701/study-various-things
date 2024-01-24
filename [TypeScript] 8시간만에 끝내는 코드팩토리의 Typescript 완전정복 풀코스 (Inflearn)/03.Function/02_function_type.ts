/**
 * Function Type
 */
const runner = () => {
  return ['person1', 'person2', 'person3'].map((x) => {
    return `사람: ${x}`;
  });
};
console.log(runner());

type Mapper = (x: string) => string;
const runner2 = (callback: Mapper) => {
  return ['person1', 'person2', 'person3'].map(callback);
};
console.log(runner2((x) => `사람: ${x}`));

type MultiplyTwoNumbers = (x: number, y: number) => number;
const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
  return x + y;
};

/**
 * Interface로 함수 타입 선언하기
 */
interface InterfaceMultiplyTwoNumbers {
  (x: number, y: number): number;
}
const multiplyTwoNumbers2: InterfaceMultiplyTwoNumbers = (x, y) => {
  return x * y;
};

/**
 * Function in Interface
 */
// 함수 타입 선업.
interface A {
  (input: number): number;
}
const aVariable: A = (input) => {
  return input;
};

interface B {
  (input1: number): number;
  (input2: string): string;
}

// 함수가 속성으로 정의.
// 이 방식은 함수 표현식(function expression)을 사용해서 정의된 것으로, 익명 함수를 변수에 할당하는 방식.
interface C {
  c: (input: number) => number;
}
const cVariable: C = {
  c: (input) => input * 2,
};
console.log(cVariable.c(10));

// 함수는 메서드 시그니처(method signature) 형태로 정의.
// 이 방식은 함수 선언식(function declaration)을 사용해 정의된 것으로, 함수 이름을 직접 명시하는 방식.
interface D {
  d(input: number): number;
}
const dVariable: D = {
  d: (input) => input * 2,
};
console.log(dVariable.d(10));
