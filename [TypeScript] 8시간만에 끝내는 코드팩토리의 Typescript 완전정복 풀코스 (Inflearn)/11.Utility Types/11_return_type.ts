/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<() => string>; // TYPE: string

type FunctionSign = (x: number, y: number) => number;

type ReturnType2 = ReturnType<FunctionSign>; // TYPE: number
