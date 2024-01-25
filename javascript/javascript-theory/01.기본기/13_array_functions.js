/**
 * Array Functions
 */
let iveMembers = ['안유진', '가을', '레이', '장원영'];
console.log(iveMembers);

// push()
iveMembers.push('코드팩토리');
console.log(iveMembers);
console.log(iveMembers.push('choi')); // 6

// pop()
console.log(iveMembers.pop()); // choi
console.log(iveMembers);

// shift()
console.log(iveMembers.shift()); // 안유진
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // 5
console.log(iveMembers);

// splice()
console.log(iveMembers.splice(1, 2)); // 가을, 레이
console.log(iveMembers); // 안유진, 장원영, 코드팩토리

/**
 * 별도의 메모리에 저장되는 함수.
 */
// concat()
iveMembers = ['안유진', '가을', '레이', '장원영'];
console.log(iveMembers.concat('코드팩토리')); // [ '안유진', '가을', '레이', '장원영', '코드팩토리' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영' ]

// slice()
console.log(iveMembers.slice(0, 3)); // [ '안유진', '가을', '레이' ]
console.log(iveMembers); // [ '안유진', '가을', '레이', '장원영' ]

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers2); // [ '안유진', '가을', '레이', '장원영' ]

let iveMembers3 = [iveMembers];
console.log(iveMembers3); // [ [ '안유진', '가을', '레이', '장원영' ] ]

let iveMembers4 = iveMembers;
console.log(iveMembers4); // [ '안유진', '가을', '레이', '장원영' ]
console.log(iveMembers === iveMembers4); // true
// console.log([...iveMembers] === iveMembers); // false

/**
 * 많이 사용하는 함수.
 */
// join()
console.log(typeof iveMembers.join()); // string
console.log(iveMembers.join()); // 안유진,가을,레이,장원영
console.log(iveMembers.join('/')); // 안유진/가을/레이/장원영

// sort()
iveMembers.sort();
console.log(iveMembers); // [ '가을', '레이', '안유진', '장원영' ]
console.log(iveMembers.reverse()); // [ '장원영', '안유진', '레이', '가을' ]

let numbers = [1, 9, 6, 4, 7, 5];
console.log(numbers);

/**
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers); // [ 1, 4, 5, 6, 7, 9 ]

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers); // [ 9, 7, 6, 5, 4, 1 ]

// map()
console.log(iveMembers.map((x) => x)); // [ '장원영', '안유진', '레이', '가을' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // [ '아이브: 장원영', '아이브: 안유진', '아이브: 레이', '아이브: 가을' ]

console.log(
  iveMembers.map((x) => {
    if (x === '안유진') {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
); // [ '장원영', '아이브: 안유진', '레이', '가을' ]
console.log(iveMembers); // [ '장원영', '안유진', '레이', '가을' ]

// filter()
numbers = [1, 4, 7, 5, 3, 8];
console.log(numbers.filter((x) => x === 1)); // [ 1 ]
console.log(numbers.filter((x) => false)); // []
console.log(numbers.filter((x) => x % 2 === 0)); // [ 4, 8 ]

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 4

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0)); // 1

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0)); // 28
console.log(
  numbers.reduce((p, n) => {
    console.log(`p: ${p}, n: ${n}`);
    return p + n;
  }, 100)
);
/**
 * p: 100, n: 1
 * p: 101, n: 4
 * p: 105, n: 7
 * p: 112, n: 5
 * p: 117, n: 3
 * p: 120, n: 8
 */
