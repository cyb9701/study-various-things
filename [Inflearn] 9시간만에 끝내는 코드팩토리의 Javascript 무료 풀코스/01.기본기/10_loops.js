/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6x6의 정사각형을 출력해라.
let square = '';
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    square += ' * ';
  }
  square += '\n';
}
console.log(square);

/**
 * for...in
 *
 * Object 에서 사용하면 key 값을 반환.
 * Array 에서 사용하면 index 값을 반환.
 */
const yuJin = {
  name: '안유진',
  year: 2003,
};

for (let key in yuJin) {
  console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이'];

for (let index in iveMembersArray) {
  console.log(index); // 0 1 2
  console.log(iveMembersArray[index]);
}

/**
 * for...of
 */
for (let value of iveMembersArray) {
  console.log(value); // 안유진 가을 레이
}

/**
 * White
 */
let number = 0;

while (number < 10) {
  number++;
}

console.log(number);

/**
 * do...white
 */
number = 0;

do {
  number++;
} while (number < 10);

console.log(number);

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }
  number++;
  console.log(number);
}

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

number = 0;

while (number < 10) {
  number++;

  if (number === 5) {
    continue;
  }

  console.log(number);
}
