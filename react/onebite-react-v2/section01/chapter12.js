// 1. 함수 표현식.
// 호이스팅의 활용이 불가능함.
function funcA() {
  console.log('🍀chapter12:2🍀', 'funcA');
}

let varA = funcA;
console.log('🍀chapter12:6🍀', varA);

// 익명 함수.
let varB = function () {
  console.log('🍀chapter12:10🍀', 'funcB');
};
varB();

// 2. 화살표 함수.
let varC = () => {
  return 1;
};
console.log('🍀chapter12:20🍀', varC());

let varD = (value) => value + 2;
console.log('🍀chapter12:23🍀', varD(10));
