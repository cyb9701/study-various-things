/**
 * Overloading
 */

/**
 * 1) 파라미터를 하나를 받거나
 * 2) 세개를 받는 함수
 */

function stringOrString(members: string): string;
function stringOrString(
  members1: string,
  member2: string,
  member3: string
): string;

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) `사람1, 사람2, 사람3'
 *
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) `사람1`, '사람2`, '사람3'
 */
function stringOrString(
  memberOrMembers: string,
  member2?: string,
  member3?: string
) {
  if (member2 && member3) {
    return `멤버: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `멤버: ${memberOrMembers}`;
  }
}

console.log(stringOrString('사람1, 사람2, 사람3')); // 멤버: 사람1, 사람2, 사람3
console.log(stringOrString('사람1', '사람2', '사람3')); // 멤버: 사람1, 사람2, 사람3
// console.log(stringOrString('사람1', '사람2')); // Error
