/**
 * Multiple Ways to Import and Export
 */
console.log('---1---');
// import { IdolModel as IM, sampleVar as vava } from './02-1_export';

// console.log(new IM('aaa', 123));

// console.log(vava);

console.log('---2---');
// import * as allTogetther from './02-1_export';

// console.log(allTogetther.IdolModel);
// console.log(allTogetther.sampleVar);

console.log('---3---');
// import cf, { IdolModel, sampleVar } from './02-1_export';

// console.log(cf);
// console.log(IdolModel);
// console.log(sampleVar);

console.log('---4---');
// [tsconfig.json]에서 "baseUrl"을 활성화 시켜줘야 한다.
import { IdolModel } from '15.Import and Export/02-1_export';

const a = new IdolModel('aaa', 123);
