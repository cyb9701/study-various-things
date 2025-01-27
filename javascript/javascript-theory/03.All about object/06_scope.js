/**
 * Scrope
 */

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}
// levelOne();

function levelOne() {
  var numberOne = 40;
  console.log(numberOne);
}
// levelOne();

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo: ${numberTwo}`);
    console.log(`levelTwo numberOne: ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne: ${numberOne}`);
}
levelOne();

/**
 * Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 * JS는 Lexical Scrope를 사용한다.
 *
 * <-> Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}

function functionTwo() {
  console.log(numberThree);
}

functionOne(); // 3

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scrop : ${i}`); // i in global scrop : 10

i = 999;
// block level scrope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(`i in global scrop : ${i}`); // i in global scrop : 999

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스크프를 만들어낸다.
 */
