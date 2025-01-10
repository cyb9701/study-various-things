// 동기 vs 비동기.
// [assets/pdf/2섹션-JavaScript 심화.pdf]
//
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs 에서 실행 됨.

console.log('🍀chapter11:3🍀', 1);
setTimeout(() => {
  console.log('🍀chapter11:5🍀', 2);
}, 3000);
console.log('🍀chapter11:7🍀', 3);
