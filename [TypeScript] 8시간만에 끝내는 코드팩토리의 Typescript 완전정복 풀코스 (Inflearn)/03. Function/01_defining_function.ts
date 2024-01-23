/**
 * Defining Function
 */
function prinName(name: string) {
  console.log(name);
}

function returnTwoCouples(persion1: string, persion2: string) {
  return `${persion1}과 ${persion2}가 있습니다`;
}
console.log(returnTwoCouples('사람1', '사람2'));
// returnTwoCouples('사람1', 1);
// returnTwoCouples('사람1');
// returnTwoCouples('사람1','사람2','사람3');

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}
console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}
console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => {
    return `good ${x}`;
  });
}
console.log(getInfiniteParameters('1', '2', '3'));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number) {
  return x + y;
}
addTwoNumbers(10, 20); // return number

function randomNumber() {
  return Math.random() > 0.5 ? 10 : '랜덤';
}
randomNumber(); // return 10 | '랜덤'

function subtractTwoNumber(x: number, y: number): number {
  return x - y;
  // return '반환값';
}

const subtractTwoNumberArrow = (x: number, y: number): number => {
  return x - y;
};

/**
 * 특수 반환 타입
 *
 * 1) void: 아무것도 반환하지 않는 타입
 * 2) never: 함수가 끝나지 않는 타입
 */
function doNotReturn(): void {
  console.log('저는 반환을 하지 않습니다.');
  // return 3;
  return;
}
doNotReturn(); // void type

function throwError(): never {
  while (true) {}
}
function throwError2(): never {
  throw Error();
}
