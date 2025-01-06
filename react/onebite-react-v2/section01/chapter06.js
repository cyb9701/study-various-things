// 1. 목시적 형 변환.
// 자바스크립트 엔진이 알아서 형 변환 하는 것.
let num = 10;
let str = '20';
const result = num + str;
console.log('🍀chapter06:6🍀', result); // Log: 1020

// 2. 명시적 형 변환.
// 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시.
// 문자열 --> 숫자.
let str1 = '10';
let strToNum1 = Number(str1);
console.log('🍀chapter06:13🍀', 10 + strToNum1);

let str2 = '10개';
let strToNum2 = parseInt(str2);
console.log('🍀chapter06:17🍀', strToNum2);

// 숫자 --> 문자열.
let num1 = 20;
let numToStr1 = String(num1);
console.log('🍀chapter06:22🍀', numToStr1 + '입니다');
