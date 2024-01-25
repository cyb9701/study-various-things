/**
 * Generic in Methods
 */
class Idol<T> {
  id: T;
  name: string;

  constructor(id: T, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello<K>(logTime: K) {
    return `[${logTime}] 안녕하세요 ${this.name} / ${this.id}`;
  }
}

const idol = new Idol('aaa', 'bbb');
idol.sayHello(123);
idol.sayHello('123');

class Message<T> {
  sayHello<K>(logTime: K, message: T) {
    console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
  }
}
const message = new Message<string>();
message.sayHello<number>(2000, 'hello');

/**
 * 클래스의 제네릭과 메서드의 제네릭을 동일한 이름으로 선언할 경우,
 * 메서드의 제네릭을 따라 가고 있다.
 */
class DuplicatedGeneriName<T> {
  sayHello<T>(logTime: T) {
    console.log(`logTime: ${typeof logTime}`);
  }
}
const duplicate = new DuplicatedGeneriName<string>();
// duplicate.sayHello<number>('123'); // ERROR
duplicate.sayHello<number>(123);
