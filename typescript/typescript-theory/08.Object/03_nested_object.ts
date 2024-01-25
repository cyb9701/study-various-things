/**
 * Nested Object
 */
type NestedPerson = {
  identity: {
    name: string;
    age: number;
  };
  nationality: string;
};
const codefactory: NestedPerson = {
  // 일부러 주석 처리해서 오류를 낼 경우.
  // Property 'name' is missing in type '{ age: number; }' but required in type '{ name: string; age: number; }'.
  identity: {
    name: 'a',
    age: 1,
  },
  nationality: 'korean',
};

// 가능한 네스팅된 객체를 여러개의 타입으로 나눠서 지정하는게 오류를 수정하는데 더 용이하다.
type TPerson = {
  identity: TPersonIdentity;
  nationality: string;
};
type TPersonIdentity = {
  name: string;
  age: number;
};
const codefactory2: TPerson = {
  // 일부러 주석 처리해서 오류를 낼 경우.
  // Property 'name' is missing in type '{ age: number; }' but required in type 'TPersonIdentity'.
  identity: {
    name: 'a',
    age: 1,
  },
  nationality: 'korean',
};

interface IPerson {
  identity: IPersonIdentity;
  nationality: string;
}
interface IPersonIdentity {
  name: string;
  age: number;
}
const codefactory3: IPerson = {
  identity: {
    name: 'a',
    age: 1,
  },
  nationality: 'korean',
};
