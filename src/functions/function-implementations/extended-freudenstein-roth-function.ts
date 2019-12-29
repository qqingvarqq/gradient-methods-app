import ExtendedFreudensteinRothFunctionSrc from './assets/extended-freudenstein-roth-function.svg';
import {FunctionMetadata} from '../function';

function validateExtendedFreudensteinRothFunctionParams(x: number[]) {
  return x.length >= 2 && x.length % 2 === 0;
}

function extendedFreudensteinRothFunction(x: number[]): number {
  if (!validateExtendedFreudensteinRothFunctionParams(x)) {
    throw new Error(
      `x :${x} should be array with length at least 2 and length can be divided by 2 without remainder`
    );
  }
  let res: number = 0;
  for (let i = 0; i < x.length / 2; i++) {
    res +=
      Math.pow(
        -13 + x[2 * i] + ((5 - x[2 * i + 1]) * x[2 * i + 1] - 2) * x[2 * i + 1],
        2
      ) +
      Math.pow(
        -29 +
          x[2 * i] +
          ((1 + x[2 * i + 1]) * x[2 * i + 1] - 14) * x[2 * i + 1],
        2
      );
  }
  return res;
}

export const ExtendedFreudensteinRothFunction: FunctionMetadata = {
  srcUrl: ExtendedFreudensteinRothFunctionSrc,
  id: 'extendedFreudensteinRothFunction',
  name: 'Extended Freudenstein & Roth Function',
  xMin: '[5, 4, 5, 4, ... 5, 4]',
  outputMin: '0',
  functionToCall: extendedFreudensteinRothFunction,
  isValidParams: validateExtendedFreudensteinRothFunctionParams,
};
