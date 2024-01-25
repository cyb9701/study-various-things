/**
 * Class Decoratro
 */
@Test
@Frozen
@LogTest('product')
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor); // [class Idol]
}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

const idol = new Idol('aaa', 23);
console.log(Object.isFrozen(Object.getPrototypeOf(idol))); // true

// decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor} is working`);
  };
}

/**
 * class에 decorator를 입히게 되면은 적용을 하게 되면은 클래스의 선언이 읽힐 때
 * 즉, 이게 실행이 될 때 딱 한 번만 컴퓨터가 이 클래스의 선언을 읽을 때 딱 한번 만 실행이 된다.
 */
const idol2 = new Idol('bbb', 203); // decorator 실행 안함.
console.log(idol2);

function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = 'ccc';

    constructor(...params: any[]) {
      super(...params);
      console.log('constructor instantiated');
    }
  };
}
// Idol { name: 'bbb', age: 203, groupName: 'ccc'}
