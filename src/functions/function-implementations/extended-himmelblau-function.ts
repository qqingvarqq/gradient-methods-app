import ExtendedHimmelblauFunctionSrc from './assets/extended-himmelblau-function.svg';
import {FunctionMetadata} from '../function';

function validateExtendedHimmelblauFunctionParams(x: number[]) {
  return x.length >= 2 && x.length % 2 === 0;
}

function extendedHimmelblauFunction(x: number[]): number {
  if (!validateExtendedHimmelblauFunctionParams(x)) {
    throw new Error(
      `x :${x} should be array with length at least 2 and length can be divided by 2 without remainder`
    );
  }
  let res: number = 0;
  for (let i = 0; i < x.length / 2; i++) {
    res +=
      Math.pow(Math.pow(x[2 * i], 2) + x[2 * i + 1] - 11, 2) +
      Math.pow(x[2 * i] + Math.pow(x[2 * i + 1], 2) - 7, 2);
  }
  return res;
}

export const ExtendedHimmelblauFunction: FunctionMetadata = {
  srcUrl: ExtendedHimmelblauFunctionSrc,
  id: 'extendedHimmelblauFunction',
  name: 'Extended Himmelblau function',
  xMin: '[3, 2, 3, 2, 3, 2, ..., 3, 2]',
  outputMin: '0',
  functionToCall: extendedHimmelblauFunction,
  isValidParams: validateExtendedHimmelblauFunctionParams,
};
