/**
 * Extract Type
 */
type stringOnly = Extract<string | boolean | number, string>; // TYPE: string

type functionOnly = Extract<string | (() => void), Function>; // TYPE: () => void
