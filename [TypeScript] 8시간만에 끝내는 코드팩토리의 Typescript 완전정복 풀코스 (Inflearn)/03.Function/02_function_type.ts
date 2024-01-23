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
interface A {
  (input: number): number;
}
const a: A = (input) => {
  return input;
};

interface B {
  (input1: number): number;
  (input2: number): number;
}

interface C {
  c: (input: number) => number;
}

interface D {
  d(input: number): number;
}
