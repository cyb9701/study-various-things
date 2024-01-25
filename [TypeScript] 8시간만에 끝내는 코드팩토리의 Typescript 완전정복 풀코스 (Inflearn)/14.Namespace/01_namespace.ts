/**
 * Namespace
 *
 * 특정 관련 있는 코드들을 하나의 모듈로 묶을 수 있는 방법
 *
 * 레거시에 간혹 사용하고 있다. 새로운 프로젝트에서 절대 사용하지 말 것!
 */
namespace Home {
  class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  // const a = new Idol(); // ERROR
  export const b = new Idol('aaa', 23);
}

namespace Post {
  class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }

  // import 가능.
  Home.b;
}

namespace Commetn {
  const name = 'comment';

  namespace Detail {
    const page = 'detail';

    console.log(name);
    console.log(page);
  }

  console.log(name);
  // console.log(page); // ERROR
}
