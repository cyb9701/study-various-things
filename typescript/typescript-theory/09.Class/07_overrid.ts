/**
 * Override
 */
class Parent {
  shout(name: string) {
    return `${name}아 안녕`;
  }
}

class WronChild extends Parent {
  // 1) 부모 메서드와 반환 타입이 일치해야 한다.
  // 2) 부모 메서드에 필수인 파라미터들이 존재해야 한다.
  // 3) 부모 메서드에서 optional인 파라미터들이 자식에서 필수로 지정되면 안된다.
  // shout() {}
}

class Child extends Parent {
  shout(name: string, me?: string): string {
    if (!me) {
      return super.shout(name);
    } else {
      return 'hello';
    }
  }
}
const child = new Child();
console.log(child.shout('aaa'));
console.log(child.shout('aaa', 'bbb'));

/**
 * 속성 override
 */
class PropertyParent {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// class PropertyChild extends PropertyParent {
//   name: number;

//   constructor(name: number) {
//     super(name);
//     this.name = name;
//   }
// }

class PropertyParent2 {
  name: string | number;
  age?: number;
  constructor(name: string | number, age?: number) {
    this.name = name;
    this.age = age;
  }
}

class PropertyChild2 extends PropertyParent2 {
  name: number;
  age: number;

  constructor(name: number, age: number) {
    super(name, age);
    this.name = name;
    this.age = age;
  }
}
