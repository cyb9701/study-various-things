/**
 * Object
 */
const codefactory = {
  name: 'a',
  age: 20,
};

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

const iPerson: IPerson = {
  name: 'a',
  age: 1,
};
const tPerson: TPerson = {
  name: 'b',
  age: 2,
};
iPerson.name;
tPerson.age;
