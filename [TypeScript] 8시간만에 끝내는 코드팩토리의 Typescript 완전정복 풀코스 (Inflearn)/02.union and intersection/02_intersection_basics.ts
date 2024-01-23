/**
 * Intersection Basics
 *
 * And의 개년
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '코드팩토리',
  age: 32,
  phone: '010',
  address: '서울시',
};

// 자동으로 never 타입으로 변경.
type NumberAndString = number & string;
