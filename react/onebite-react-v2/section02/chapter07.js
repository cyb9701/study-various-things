// 배열 메서드.
// 6가지의 요소 조작 메서드.

// 1. push.
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드.
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push([5, 6, 7]);
console.log('🍀chapter07:8🍀', newLength); // Log: 7.

// 2. pop.
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
console.log('🍀chapter07:14🍀', poppedItem); // Log: 3.

// 3. shift.
// 배열의 맨 앞에 있는 요소를 제거, 반환.
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log('🍀chapter07:20🍀', shiftedItem); // Log: 1.

// 4. unshift.
// 배열의 맨 앞에 새로운 욧를 추가하는 메서드.
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log('🍀chapter07:26🍀', arr4, newLength2); // Log: [0,1,2,3] 4.

// 5. slice.
// 마치 가위처럼. 배열의 특정 범위를 잘라내서 새로운 배열로 반환.
// (시작점의 인덱스, 종료점의 인덱스 + 1)
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
console.log('🍀chapter07:33🍀', arr5, sliced); // Log: [1,2,3,4,5] [3,4,5].

let sliced2 = arr5.slice(2);
console.log('🍀chapter07:36🍀', sliced2); // Log: [3,4,5].

let sliced3 = arr5.slice(-1);
let sliced4 = arr5.slice(-4);
console.log('🍀chapter07:39🍀', sliced3, sliced4); // Log: [5] [2,3,4,5].

// 6. concat.
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환.
let arr6 = [1, 2];
let arr7 = [3, 4];

let concated = arr6.concat(arr7);
console.log('🍀chapter07:48🍀', concated); // Log: [1,2,3,4].
