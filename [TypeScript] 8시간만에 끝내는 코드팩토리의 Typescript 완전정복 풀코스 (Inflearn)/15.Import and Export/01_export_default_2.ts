import AAA from './01_export_default_1';

console.log('---1---');
// const idol = new AAA('aaa', 123);

console.log('---2---');
// console.log(AAA); // 10

console.log('---3---');
// const cat: AAA = {
//   name: '123',
//   age: 123,
// };

console.log('---4---');
const aaa = new AAA.IdolModel('aaa', 123);
console.log(aaa);
console.log(aaa.name);
