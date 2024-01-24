/**
 * Property Check
 *
 * 초과 속성 검사
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

const iu = {
  name: 'iu',
  age: 32,
};

// 초과되는 값들이 있어도 할당이 가능하다.
const testName: TName = iu;
const testAage: TAge = iu;
