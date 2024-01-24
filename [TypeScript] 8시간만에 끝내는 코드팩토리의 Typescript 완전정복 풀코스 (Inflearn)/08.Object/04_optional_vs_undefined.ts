/**
 * Optional vs Undefined Property
 */
interface Dog {
  name: string;
  age: number;
  // 종을 모르면 undefined
  breed?: string;
}
const dog1: Dog = {
  name: 'a',
  age: 10,
  breed: 'type',
};
const dog2: Dog = {
  name: 'a',
  age: 10,
};

interface Cat {
  name: string;
  age: number;
  breed: string | undefined;
}
const cat: Cat = {
  name: 'a',
  age: 10,
  breed: undefined,
  // breed를 입력하지 않은 경우.
  // Property 'breed' is missing in type '{ name: string; age: number; }' but required in type 'Cat'.
};
