/**
 * Reflection Metadata
 */
import 'reflect-metadata';

const idol = {
  name: 'aaa',
  age: 32,
  nationality: 'bbb',
};

console.log(idol);

/**
 * 파라미터의 정의
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 (필수가 아니다)
 *
 * 메타데이터가 무엇인가?
 * 데이터에 대한 데이터
 */

Reflect.defineMetadata('test-meta', 123, idol);
console.log(idol); // { name: 'aaa', age: 32, nationality: 'bbb' }
console.log(Reflect.getMetadata('test-meta', idol)); // 123

Reflect.defineMetadata('test-meta', 456, idol);
console.log(Reflect.getMetadata('test-meta', idol)); // 456

Reflect.defineMetadata('test-meta2', 789, idol);
console.log(Reflect.getMetadata('test-meta', idol)); // 456
console.log(Reflect.getMetadata('test-meta2', idol)); // 789

Reflect.defineMetadata('test-meta3', { grade: 1 }, idol);
console.log(Reflect.getMetadata('test-meta3', idol)); // { grade: 1 }

/**
 * 프로퍼티에 저장하기
 */
Reflect.defineMetadata('object-meta', 999, idol, 'name');
console.log(Reflect.getMetadata('object-meta', idol, 'name')); // 999

Reflect.deleteMetadata('object-meta', idol, 'name');
console.log(Reflect.getMetadata('object-meta', idol, 'name')); // undefined
console.log(Reflect.hasMetadata('object-meta', idol, 'name')); // false

console.log(Reflect.getMetadataKeys(idol)); // [ 'test-meta', 'test-meta2' ]
console.log(Reflect.getMetadataKeys(idol, 'name')); // []

Reflect.defineMetadata(
  'prototype-data',
  'this is property',
  Object.getPrototypeOf(idol)
);
console.log(Reflect.getMetadataKeys(idol)); // [ 'test-meta', 'test-meta2', 'prototype-data' ]
console.log(Reflect.getOwnMetadataKeys(idol)); // [ 'test-meta', 'test-meta2' ]
