/**
 * JS의 문제점
 *
 * dynamicall typed
 */
function add(var1, var2) {
  return var1 + var2;
}

console.log(add(1, 2));
console.log(add(1, '2'));
console.log(add('1', '2'));

// typeof runtime 에 체를 할 수 있다.
function addTypeSafe(var1, var2) {
  if (typeof var1 === 'number' && typeof var2 === 'number') {
    return var1 + var2;
  } else {
    throw Error('숫자만 넣어야 한다.');
  }
}
