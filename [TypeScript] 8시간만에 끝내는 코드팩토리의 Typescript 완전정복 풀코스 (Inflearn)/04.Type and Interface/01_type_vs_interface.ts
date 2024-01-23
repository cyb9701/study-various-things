/**
 * Type vs Interface
 */
// Object 선언.
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function을 선언.
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 가능,
 * Interface에서는 불가능
 */

// 1) primitive 타입 선언하기.
type Name = string;

// 2) union 타입 선언하기.
type UnionType = string | number;

// 3) primitive list 또는 tuple 타입 선언하기.
type TypuleType = [number, string];

/**
 * Type에서는 불가능,
 * Interface에서는 가능
 */

// interface merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

let rectangle: IRectangle = {
  width: 100,
  height: 100,
};

// type TRectange = {
//   height: number;
// };

// type TRectange = {
//   width: number;
// };

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티.
  getY = (x: number) => {
    return x;
  };

  // 메서드.
  getX(x: number) {
    return x;
  }
}

interface GetXandY {
  // 프로퍼티.
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXandY {
  getX: (x: number) => number;
  // getY: (y: string) => number;
}

interface GetXandY2 {
  // 메서드.
  getX(x: number): number;
  getY(y: number): number;
}

interface GetXandY2 {
  // 메서드.
  getX(x: number): number;
  getY(y: string): number;
}
