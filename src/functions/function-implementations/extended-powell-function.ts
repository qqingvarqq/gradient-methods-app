import ExtendedPowellFunctionSrc from './assets/extended-powell-function.svg';
import {FunctionMetadata} from '../function';
function validateExtendedPowellFunctionParams(x: number[]) {
  return x.length >= 4 && x.length % 4 === 0;
}
function extendedPowellFunction(x: number[]): number {
  if (!validateExtendedPowellFunctionParams(x)) {
    throw new Error(
      `x :${x} should be array with length at least 4 length can be divided by 4 without remainder`
    );
  }
  let res: number = 0;
  for (let i = 0; i < x.length / 4; i++) {
    res +=
      Math.pow(x[4 * i] + 10 * x[4 * i + 1], 2) +
      5 * Math.pow(x[4 * i + 2] - x[4 * i + 3], 2) +
      Math.pow(x[4 * i + 1] - 2 * x[4 * i + 2], 4) +
      10 * Math.pow(x[4 * i] - x[4 * i + 3], 4);
  }
  return res;
}

export const ExtendedPowellFunction: FunctionMetadata = {
  srcUrl: ExtendedPowellFunctionSrc,
  id: 'powellFunction',
  name: 'Extended Powell function',
  xMin: '[0, 0, 0, 0, ...]',
  outputMin: '0',
  functionToCall: extendedPowellFunction,
  isValidParams: validateExtendedPowellFunctionParams,
};
