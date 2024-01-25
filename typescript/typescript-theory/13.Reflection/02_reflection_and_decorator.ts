/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

const restrictParamValuKey = Symbol('restrictParamValue');

interface RestrictionInfo<T> {
  index: number;
  restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]) {
  return (target: any, propertyKey: string, index: number) => {
    const prevMeta =
      Reflect.getOwnMetadata(restrictParamValuKey, target, propertyKey) ?? [];

    const info: RestrictionInfo<T> = {
      index: index,
      restrictedValues: restrictedValues,
    };

    Reflect.defineMetadata(
      restrictParamValuKey,
      [...prevMeta, info],
      target,
      propertyKey
    );

    console.log(
      Reflect.getOwnMetadata(restrictParamValuKey, target, propertyKey)
    );
  };
}

function ValidateMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metas: RestrictionInfo<any>[] =
    Reflect.getOwnMetadata(restrictParamValuKey, target, propertyKey) ?? [];

  const original = descriptor.value;
  descriptor.value = function (...args: any) {
    const invalids = metas.filter((x) => {
      return !x.restrictedValues.includes(args[x.index]);
    });

    if (invalids.length > 0) {
      throw Error(`error. ${invalids.map((x) => args[x.index].join(', '))}`);
    }

    return original.apply(this, args);
  };
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @ValidateMethod
  // style 에는 '신나게' | '열정적으로'
  sing(
    @RestrictParamValue(['신나게', '열정적으로']) style: string,
    @RestrictParamValue([1, 2, 3]) rank: number
  ) {
    return `${this.name}이 ${style} 노래를 부릅니다.`;
  }
}

console.log('--------');
const idol = new Idol('aaa', 23);
// [ { index: 0, restrictedValues: [ '신나게' | '열정적으로' ] } ]

console.log('---sing---');
console.log(idol.sing('신나게', 1));
console.log(idol.sing('열정적으로', 2));
// console.log(idol.sing('good')); // ERROR
// console.log(idol.sing('열정적으로', 999)); // ERROR
