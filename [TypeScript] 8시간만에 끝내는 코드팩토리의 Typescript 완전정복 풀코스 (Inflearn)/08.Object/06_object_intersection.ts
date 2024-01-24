/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number; // TYPE: never

type PersonType = {
  name: string;
  age: number;
};
type CompanyType = {
  company: string;
  companyRegistrationNumber: string;
};
type PersonAndCompany = PersonType & CompanyType;
const person: PersonAndCompany = {
  name: 'a',
  age: 10,
  company: 'hive',
  companyRegistrationNumber: '1111',
};

type PetType = {
  petName: string;
  petAge: number;
};
type CompanyOrPet = PersonType & (CompanyType | PetType);
let comanyOrPet: CompanyOrPet = {
  name: 'a',
  age: 32,

  company: 'hive',
  companyRegistrationNumber: '1111',

  petName: 'bb',
  petAge: 123,
};
comanyOrPet = {
  name: 'a',
  age: 32,

  company: 'hive',
  companyRegistrationNumber: '1111',

  // petName: 'bb',
  // petAge: 123,
};
comanyOrPet = {
  name: 'a',
  age: 32,

  // company: 'hive',
  // companyRegistrationNumber: '1111',

  petName: 'bb',
  petAge: 123,
};
comanyOrPet = {
  name: 'a',
  age: 32,

  company: 'hive',
  companyRegistrationNumber: '1111',

  // petName: 'bb',
  petAge: 123,
};
