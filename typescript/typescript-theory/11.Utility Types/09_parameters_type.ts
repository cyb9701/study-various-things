/**
 * Parameters Type
 */
function sampleFunction(x: number, y: string, z: boolean) {}

type Params = Parameters<typeof sampleFunction>; // TYPE: [x: number, y: string, z: boolean]
type Params2 = Parameters<(one: number) => void>; // TYPE: [one: number]
