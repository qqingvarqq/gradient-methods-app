import SumSquaresFunctionSrc from './assets/sum-squares-function.svg';
import {FunctionMetadata} from '../function';
function validateSumSquaresFunctionParams(x: number[]) {
  return x.length >= 1;
}
function sumSquaresFunction(x: number[]): number {
  if (!validateSumSquaresFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  let res: number = 0;
  for (let i = 0; i < x.length; i++) {
    res += (i + 1) * Math.pow(x[i], 2);
  }
  return res;
}

export const SumSquaresFunction: FunctionMetadata = {
  srcUrl: SumSquaresFunctionSrc,
  id: 'sumSquaresFunction',
  name: 'Sum Squares function',
  xMin: '[0, 0, 0, 0, ...]',
  outputMin: '0',
  functionToCall: sumSquaresFunction,
  isValidParams: validateSumSquaresFunctionParams,
};
