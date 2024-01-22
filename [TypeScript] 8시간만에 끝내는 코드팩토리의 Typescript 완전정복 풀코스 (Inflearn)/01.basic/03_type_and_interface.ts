/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female';

const newStringVar: NewStringType = 'new string';

type IdolType = {
  name: string;
  year: number;
};
const yuJin: IdolType = {
  name: '안유진',
  year: 2003,
};

/**
 * Interface
 */
interface IdolInterface {
  name: string;
  year: number;
}
const yuJin2: IdolInterface = {
  name: '안유진',
  year: 2003,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}
const yuJin3 = {
  name: '안유진',
  year: 2003,
};

interface IdolOptional {
  name: string;
  year?: number;
}
const yuJin4 = {
  name: '안유진',
};
