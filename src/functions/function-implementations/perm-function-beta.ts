import PermFunctionBetaSrc from './assets/perm-function-beta.svg';
import {FunctionMetadata} from '../function';
function validatePermFunctionBetaParams(x: number[]) {
  return x.length >= 1;
}
function permFunctionBeta(x: number[]): number {
  if (!validatePermFunctionBetaParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  const BETA = 1;
  let res: number = 0;
  for (let i = 0; i < x.length; i++) {
    let innerSum: number = 0;
    for (let j = 0; j < x.length; j++) {
      innerSum +=
        (Math.pow(j + 1, i + 1) + BETA) * (Math.pow(x[j] / (j + 1), i + 1) - 1);
    }
    res += Math.pow(innerSum, 2);
  }
  return res;
}

export const PermFunctionBeta: FunctionMetadata = {
  srcUrl: PermFunctionBetaSrc,
  id: 'permfunctionBeta',
  name: 'Perm function, Beta=1',
  xMin: '[1,2,3, ..., n-1, n]',
  outputMin: '0',
  functionToCall: permFunctionBeta,
  isValidParams: validatePermFunctionBetaParams,
};
