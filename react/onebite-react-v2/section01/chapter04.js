// 1. 변수.
// 선언, 초기화 과정.
let age = 27;
console.log('🍀chapter04:3🍀', age);

age = 30;
console.log('🍀chapter04:7🍀', age);

let age2;
console.log('🍀chapter04:10🍀', age2);

// 2. 상수.
const birth = '1996.12.16';
// birth = '123'; // Error: 재할당 불가능.
// const birth2; // Error: 초기화 필수.

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없다.
// let let; // Error

// 4. 변수 명명 가이드.
let salesCount = 2;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
