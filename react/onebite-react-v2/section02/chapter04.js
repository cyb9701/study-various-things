// 1. Spread 연산자.
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할.
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 3,
  ...obj1,
  d: 4,
};

function funcA(p1, p2, pr) {
  console.log('🍀chapter04:17🍀', p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수.
// Rest: 나머지, 나머지 매개변수.
const funcB = (one, ...restaaaa) => {
  console.log('🍀chapter04:24🍀', one, rest); // Log: 1 [2,3].
};
funcB(...arr1);
