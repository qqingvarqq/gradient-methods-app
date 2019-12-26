import ZakharovFunctionSrc from './assets/zakharov-function.svg';
import {FunctionMetadata} from '../function';
function validateZakharovFunctionParams(x: number[]) {
  return x.length >= 1;
}
function zakharovFunction(x: number[]): number {
  if (!validateZakharovFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  let firstSum: number = 0;
  let secondSum: number = 0;
  for (let i = 0; i < x.length; i++) {
    firstSum += Math.pow(x[i], 2);
    secondSum += 0.5 * (i + 1) * x[i];
  }
  return firstSum + Math.pow(secondSum, 2) + Math.pow(secondSum, 4);
}

export const ZakharovFunction: FunctionMetadata = {
  srcUrl: ZakharovFunctionSrc,
  id: 'zakharovFunction',
  name: 'Zakharov function',
  xMin: '[0, 0, 0, 0, ...]',
  outputMin: '0',
  functionToCall: zakharovFunction,
  isValidParams: validateZakharovFunctionParams,
};
