import ExtendedRosenbrockFunctionSrc from './assets/extended-rosenbrock-function.svg';
import {FunctionMetadata} from '../function';

function validateExtendedRosenbrockFunctionParams(x: number[]) {
  return x.length >= 2 && x.length % 2 === 0;
}

function extendedRosenbrockFunction(x: number[]): number {
  if (!validateExtendedRosenbrockFunctionParams(x)) {
    throw new Error(
      `x :${x} should be array with length at least 2 and length can be divided by 2 without remainder`
    );
  }
  let res: number = 0;
  for (let i = 0; i < x.length / 2; i++) {
    res +=
      100 * Math.pow(x[2 * i + 1] - x[2 * i] * x[2 * i], 2) +
      Math.pow(1 - x[2 * i], 2);
  }
  return res;
}

export const ExtendedRosenbrockFunction: FunctionMetadata = {
  srcUrl: ExtendedRosenbrockFunctionSrc,
  id: 'extendedRosenbrockFunction',
  name: 'Extended Rosenbrock function',
  xMin: '[1, 1, 1, 1, 1, 1, ...]',
  outputMin: '0',
  functionToCall: extendedRosenbrockFunction,
  isValidParams: validateExtendedRosenbrockFunctionParams,
};
