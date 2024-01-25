/**
 * Readonly Type
 */
interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: 'aaa',
  age: 30,
};

cat.age = 10;

const cat2: Readonly<Cat> = {
  name: 'aaa',
  age: 30,
};

// cat2.age = 10; // ERROR
