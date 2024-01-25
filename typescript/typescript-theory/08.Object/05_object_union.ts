/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: 'dog',
        age: 12,
      }
    : // 고양이
      {
        name: 'cat',
        breed: 'type',
      };
dogOrCat.name; // TYPE: string
dogOrCat.age; // TYPE: number | string

interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;
const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? // 강아지
      {
        name: 'dog',
        age: 12,
      }
    : // 고양이
      {
        name: 'cat',
        breed: 'type',
      };
dogOrCat2.name; // TYPE: string
// dogOrCat2.age; // ERROR

if ('age' in dogOrCat2) {
  dogOrCat2; // TYPE: Dog
  dogOrCat2.age;
} else {
  dogOrCat2; // TYPE: Cat
}
