import DixonPriceFunctionSrc from './assets/dixon-price-function.svg';
import {FunctionMetadata} from '../function';
function validateDixonPriceFunctionParams(x: number[]) {
  return x.length >= 1;
}
function dixonPriceFunction(x: number[]): number {
  if (!validateDixonPriceFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 2`);
  }
  let firstSum: number = Math.pow(x[0] - 1, 2);
  let secondSum: number = 0;
  for (let i = 1; i < x.length; i++) {
    secondSum += (i + 1) * Math.pow(Math.pow(2 * x[i], 2) - x[i - 1], 2);
  }
  return firstSum + secondSum;
}

export const DixonPriceFunction: FunctionMetadata = {
  srcUrl: DixonPriceFunctionSrc,
  id: 'dixonPriceFunction',
  name: 'Dixon-Price function',
  xMin: '[2^(-(2^i-2)/2^i),....] for all i = 1...n',
  outputMin: '0',
  functionToCall: dixonPriceFunction,
  isValidParams: validateDixonPriceFunctionParams,
};
