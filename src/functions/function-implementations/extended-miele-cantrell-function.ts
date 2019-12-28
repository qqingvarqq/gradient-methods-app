import ExtendedMieleAndCantrellFunctionSrc from './assets/extended-miele-cantrell-function.svg';
import {FunctionMetadata} from '../function';
function validateExtendedMieleAndCantrellFunctionParams(x: number[]) {
  return x.length >= 4 && x.length % 4 === 0;
}
function extendedMieleAndCantrellFunction(x: number[]): number {
  if (!validateExtendedMieleAndCantrellFunctionParams(x)) {
    throw new Error(
      `x :${x} should be array with length at least 4 length can be divided by 4 without remainder`
    );
  }
  let res: number = 0;
  for (let i = 0; i < x.length / 4; i++) {
    res +=
      Math.pow(Math.pow(Math.E, x[4 * i]) - x[4 * i + 1], 2) +
      100 * Math.pow(x[4 * i + 1] - x[4 * i + 2], 6) +
      Math.pow(Math.tan(x[4 * i + 2] - x[4 * i + 3]), 4) +
      Math.pow(x[4 * i], 8);
  }
  return res;
}

export const ExtendedMieleAndCantrellFunction: FunctionMetadata = {
  srcUrl: ExtendedMieleAndCantrellFunctionSrc,
  id: 'extendedMieleAndCantrellFunction',
  name: 'Extended Miele & Cantrell function',
  xMin: '[0, 1, 1, 1, ... 0, 1, 1, 1,]',
  outputMin: '0',
  functionToCall: extendedMieleAndCantrellFunction,
  isValidParams: validateExtendedMieleAndCantrellFunctionParams,
};
