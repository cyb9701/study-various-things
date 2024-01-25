/**
 * Exclude Type
 */
type NoString = Exclude<string | boolean | number, string>; // TYPE: number | boolean

type NoFunction = Exclude<string | (() => void), Function>; // TYPE: string
