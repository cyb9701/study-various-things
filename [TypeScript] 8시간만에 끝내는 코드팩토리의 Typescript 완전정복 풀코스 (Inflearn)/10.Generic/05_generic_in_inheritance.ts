/**
 * Generic in Iheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StringCache extends BaseCache<string> {}

const stringCache = new StringCache();
stringCache.data; // TYPE: string[]

class GenericChild<T, K> extends BaseCache<T> {
  message?: K;

  constructor(message?: K) {
    super();
    this.message = message;
  }
}

const generiChild = new GenericChild<string, string>('error');
generiChild.data; // TYPE: string[]
generiChild.message; // TYPE: string | undefined

/**
 * 제너릭의 inheritance
 */
interface BasesGeneric {
  name: string;
}

class Idol<T extends BasesGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const idol = new Idol({
  // name 속성은 필수로 존재해야 한다.
  name: 'aaa',
  age: 123,
});

/**
 * keyof 함께 사용하기
 */
const testObject = {
  a: 1,
  b: 2,
  c: 3,
};

function objectParser<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

const value = objectParser(testObject, 'a'); // 1

/**
 * Ternary
 * 1 === 2 ? true : false
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
  type: 'Male Idol' = 'Male Idol';
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol(); // TYPE: Female
const idol3: SpecificIdol<MaleIdol> = new MaleIdol(); // TYPE: MaleIdol
