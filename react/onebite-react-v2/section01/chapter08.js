// 1. null 병합 연산자.
// 존재하는 값을 추려내는 기능.
// null, undefined가 아닌 값을 찾아내는 연산자.
let var1;
let ver2 = 10;
let ver3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

let userName = '최유빈';
let userNickname = 'choi';
let displayName = userName ?? userNickname;

// 2. typeof 연산자.
// 값의 타입을 문자열로 변환하는 기능을 하는 연산자.
let var7 = 1;
var7 = 'hello';

let t1 = typeof var7;

// 3. 삼항 연산자.
// 항을 3개 사용하는 연산자.
let var8 = 10;
let res = var8 % 2 === 0 ? '짝수' : '홀수';
