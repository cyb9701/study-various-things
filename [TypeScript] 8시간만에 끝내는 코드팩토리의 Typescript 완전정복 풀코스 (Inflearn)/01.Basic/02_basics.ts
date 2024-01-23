/**
 * Types
 */
let helloText: string = 'Hello';
// helloText = true;

/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = 'string';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
/// any
/// 아무 타입이나 입력할 수 있는 피트키 같은 타입.
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

/// unknown
/// 알 수 없는 타입.
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber1: number = unknownType;
// let testString1:string=unknownType;
// let testBoolean1:boolean =unknownType;
let unkwonType2: unknown = unknownType;
let anyType2: any = unknownType;

/// never
/// 어떠한 값도 저장되거나 반환되지 않을때 사용하는 타입.
// let neverType: never = null;
// let neverType:never = undefined;
// let neverType:never = 'test'

/// 리스트 타입
const koreanGirlGroup: string[] = [];
const booleanList: boolean[] = [true, false, false];
