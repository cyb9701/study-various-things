/**
 * Method Decorator
 */
class Idol {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @TestMethodDecorator
  @Configurable(false)
  @MethodCallLogger('PROD')
  dance() {
    return `${this.name} is dancing`;
  }
}

/**
 *
 * @param target
 * 1) tatic method에 데코레이팅을 할 경우 생성자 함수
 * 2) instance method에 데코레이팅 할 경우 인스턴스의 prototype
 *
 * @param propertyKey
 * 메서드의 이름
 *
 * @param descriptor
 * property descriptor
 */
function TestMethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('Log Call');
  console.log('---target---');
  console.log(target);
  console.log('---propertyKey---');
  console.log(propertyKey);
  console.log('---descriptor----');
  console.log(descriptor);
}

/**
 * 선언이 될 때 딱 한번만 실행이 된다.
 */
const idol = new Idol('aaa');
// Log Call
// ---target---
// {}
// ---propertyKey---
// dance
// ---descriptor----
// { value: [Function: dance], ... }

console.log('---run dance---');
idol.dance(); // 데코레이터 실행 안함.

function Configurable(configurable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.configurable = configurable;
  };
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
// { dance: { value: [Function: dance], configurable: false, ... } }

function MethodCallLogger(env: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`[${env}] running function : ${propertyKey}`);

      const result = originalMethod.apply(this, ...args);
      return result;
    };
  };
}
// [PROD] running function : dance
// { dance: { value: [Function: dance], configurable: false, ... } }
