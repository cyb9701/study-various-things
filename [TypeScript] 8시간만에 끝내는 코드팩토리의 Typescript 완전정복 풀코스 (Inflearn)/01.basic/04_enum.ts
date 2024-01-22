/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 *
 * DONE: 요청 완료 상태
 * ERROR: 에러가 생긴 상태
 * LOADING: 로딩 상태
 * INITIAL: 초기 상태
 */
function runWork() {
  let state = 'INITIAL';

  try {
    state = 'LOADING';

    state = 'DONE';
  } catch (e) {
    state = 'ERROR';
  } finally {
    return state;
  }
}
const result = runWork();
console.log(result);
console.log(result === 'DONNE'); // false

enum State {
  DONE,
  ERROR,
  LOADING,
  INITIAL,
  ANY = 'any value',
}
function runWork2() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;

    state = State.DONE;
  } catch (e) {
    state = State.ERROR;
  } finally {
    return state;
  }
}
const result2 = runWork2();
console.log(result2); // 0
console.log(result2 === State.DONE); // true
console.log(State.ANY); // any value
