/**
 * Generic in implementation
 */
interface Singer<T, K> {
  name: T;
  sing(year: K): void;
}

class Idol implements Singer<string, number> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(year: number): void {
    console.log(`sing~~~~ ${year}`);
  }
}

const idol = new Idol('aaa');
idol.sing(2003);

class Idol2<T, K> implements Singer<T, K> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }

  sing(year: K): void {
    console.log(`[${year}] ${this.name} sing~~~`);
  }
}

const idol2 = new Idol2<string, number>('bbb');
idol2.sing(2000);
