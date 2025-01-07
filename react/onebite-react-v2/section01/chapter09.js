// 1. if 조건문 (if문)
let num = 10;

if (num >= 10) {
  console.log('🍀chapter09:5🍀', 'a');
} else if (num > 5) {
  console.log('🍀chapter09:9🍀', 'b');
} else {
  console.log('🍀chapter09:12🍀', 'c');
}

// 2. Switch 문.
// if문과 기능 자체는 동일.
// 다수의 조건을 처리할 때 if 보다 더 직관적이다.
let animal = 'cat';

switch (animal) {
  case 'cat':
    console.log('🍀chapter09:19🍀');
    break;

  case 'dog':
    console.log('🍀chapter09:21🍀');
    break;

  case 'snake':
    console.log('🍀chapter09:23🍀');
    break;

  default:
    console.log('🍀chapter09:25🍀');
}
