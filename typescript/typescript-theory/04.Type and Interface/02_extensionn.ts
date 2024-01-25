/**
 * Extension
 */
interface IName {
  name: string;
}
interface IIdol extends IName {
  age: number;
}
const idol: IIdol = {
  name: '안유진',
  age: 23,
};

type TName = {
  name: string;
};
type TIdol = TName & { age: number };
const idol2: TIdol = {
  name: '아이유',
  age: 29,
};

interface IIdol2 extends TName {
  age: number;
}
const idol3: IIdol2 = {
  name: '제니',
  age: 30,
};

type TIdol2 = IIdol & {
  age: number;
};
const idol4 = {
  name: '지수',
  age: 31,
};

/**
 * extending multiple
 */
type DogName = {
  name: string;
};
type DogAge = {
  age: number;
};
type DogBreed = {
  breed: string;
};
type Dog = DogName & DogAge & DogBreed;
const dog: Dog = {
  name: '이름',
  age: 10,
  breed: '종류',
};

interface DogName2 {
  name: string;
}
interface DogAge2 {
  age: number;
}
interface DogBreed2 {
  breed: string;
}
interface Dog2 extends DogName2, DogAge2, DogBreed2 {}
const dog2: Dog2 = {
  name: '이름',
  age: 10,
  breed: '종류',
};

/**
 * Overrding
 */
type THeight = {
  height: number;
};
type TRectangle = THeight & {
  height: string;
  width: number;
};
// const rectangle:TRectangle = {
//   width:100,
//   // height:, // TYPE: never
// }

type TWidth = {
  width: number | string;
};
type TRectangle2 = TWidth & {
  width: number;
  height: number;
};
const rectangle2: TRectangle2 = {
  width: 100, // TYPE: number
  height: 100,
};

interface IHeight {
  height: number;
}
interface IRectangle extends IHeight {
  // height: string;
  width: number;
}

interface IWidth {
  width: number | string;
}
interface IRectangle2 extends IWidth {
  width: number;
  // width: number | string;
  height: number;
}
