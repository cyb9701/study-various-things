/**
 * Execution Context
 *
 * 실행하려는 JS 코드와 코드를 실행할때 필요한 정보를 담고 있는 특수한 환경이다.
 * 코드 실행에 필요한 모든 데이터를 틀고 있는 환경이라고 생각하면 된다.
 *
 * 1) Global Context: 최상위 Execution Context다. 코드를 실행하면 무조건 생성되는 context로 웹에서의 window 객체나 nodeJS에서의 global 객체를 생성하고 들고 있는다.
 * 2) Function Context: 함수가 실행될때마다 함수별로 실행되는 context이다. 함수 실행에 대한 모든 정보를 갖고 있는다.
 */

/**
 * Execution Context Stack
 *
 * 1) Creation Phase
 *    - Global Object를 생성한다. window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
 *    - this를 window 또는 global에 바인딩한다.
 *    - 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다.
 *
 * 2) Execution Phase
 *    - 코드를 실행한다.
 *    - 필요하다면 새로운 Execution Context를 생성한다.
 */
