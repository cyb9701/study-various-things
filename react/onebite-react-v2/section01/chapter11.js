// 1. 함수 선언.
function greeting() {
  console.log('🍀chapter11:3🍀', '안녕하세요');
}

console.log('🍀chapter11:6🍀', '호출 전');
greeting();
console.log('🍀chapter11:8🍀', '호출 후');

// 매개변수.
const getArea = (width, height) => {
  let area = width * height;
  console.log('🍀chapter11:15🍀', area);
};

// 인수.
getArea(10, 20);

// 2. 반환 함수.
const getAge = (birth) => {
  const age = 2025 - birth - 1;
  return age; // 반환값.
};
const age = getAge(1996);
console.log('🍀chapter11:24🍀', age);

// 3. 중첩 함수.
const aFunction = () => {
  // 중첩 함수.
  const bFunction = () => {};

  console.log('🍀chapter11:28🍀');
};

// 4. 호이스팅.
// 끌어올리다 라는 뜻을 가진다.
// 선언이 호출보다 아래에 있는 경우에도 문제 없이 작동한다.
cFunction();

const cFunction = () => {
  console.log('🍀chapter11:40🍀');
};
