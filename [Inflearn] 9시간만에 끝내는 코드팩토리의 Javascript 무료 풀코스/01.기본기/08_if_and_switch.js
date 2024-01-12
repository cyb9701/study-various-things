/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0) {
  console.log('number 변수는 짝수입니다.');
} else {
  console.log('number 변수는 홀수입니다.');
}

if (number % 2 === 0) {
  console.log('2의 배수입니다.');
} else if (number % 3 === 0) {
  console.log('3의 배수입니다.');
} else if (number % 4 === 0) {
  console.log('4의 배수입니다.');
} else {
  console.log('2,3,4의 배수가 아닙니다.');
}
