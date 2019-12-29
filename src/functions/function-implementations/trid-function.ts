import TridFunctionSrc from './assets/trid-function.svg';
import {FunctionMetadata} from '../function';
function validateTridFunctionParams(x: number[]) {
  return x.length >= 2;
}
function tridFunction(x: number[]): number {
  if (!validateTridFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 2`);
  }
  let res: number = Math.pow(x[0] - 1, 2);
  for (let i = 1; i < x.length; i++) {
    res += Math.pow(x[i] - 1, 2) - x[i] * x[i - 1];
  }
  return res;
}

export const TridFunction: FunctionMetadata = {
  srcUrl: TridFunctionSrc,
  id: 'tridFunction',
  name: 'Trid function',
  xMin: '[i*(n+1-i),...], i=1..n',
  outputMin: '-n(n+4)(n-1)/6,  where n is dimension of x',
  functionToCall: tridFunction,
  isValidParams: validateTridFunctionParams,
};
