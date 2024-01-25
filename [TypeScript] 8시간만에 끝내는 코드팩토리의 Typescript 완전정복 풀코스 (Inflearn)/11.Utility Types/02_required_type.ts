/**
 * Required Type
 */
interface Dog {
  name: string;
  age?: number;
  countr?: string;
}

const dog: Dog = {
  name: 'aaa',
};

const requiredDog: Required<Dog> = {
  name: 'aaa',
  age: 1,
  countr: 'bbb',
};
