// 1. 단란 평가.
// 논리연산자에서 첫번째 피연사자의 값만으로도 이 연산의 결과를 확정할 수 있다면,
// 두번째 피연사자에는 아예 접근을 하지 않는다.
const returnFalse = () => {
  console.log('🍀chapter02:3🍀', 'FFF');
  return false;
  // return undefined;
};

const returnTrue = () => {
  console.log('🍀chapter02:8🍀', 'TTT');
  return true;
};

console.log('🍀chapter02:12🍀', returnFalse() && returnTrue()); // Log: FFF.

console.log('🍀chapter02:12🍀', returnTrue() && returnFalse()); // Log: TTT.

// 2. 활용 사례.
function printName(person) {
  const name = person && person.name;
  console.log('🍀chapter02:22🍀', name || 'person의 값이 없음');
}
printName();
