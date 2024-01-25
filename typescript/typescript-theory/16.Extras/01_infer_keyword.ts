/**
 * Infer Keyword
 *
 * infer: 유추하다
 *
 * (INferring Type in Conditional Type)
 *
 * Inter Keyword는 Conditional Type에서만 사용 가능한 키워드이다.
 * 그러니 extends 키워드는 사용했을때 extend한 대상에서 타입을 한번 더 추론하는 역할을 한다.
 */

/**
 * 1) 가장 많이 사용하는 예제
 *
 * Flattening -> Array를 벗겨낼때
 * string[] -> string
 * string[][] -> string[]
 */
type Flatten<T> = T extends Array<infer K> ? K : T;
type Flatten2<T> = T extends (infer K)[] ? K : T;

type StringArray = Flatten<string[]>; // TYPE: string
type NumberArray = Flatten<number[]>; // TYPE: number

/**
 * 2) Return Type 추론
 */
type InferReturnType<T> = T extends () => infer K ? K : T;

type StringArray2 = InferReturnType<() => string>; // TYPE: string
type NumberArray2 = InferReturnType<number[]>; // TYPE: number[]
type NumberArray22 = InferReturnType<() => number>; // TYPE: number
