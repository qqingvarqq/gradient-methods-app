import StyblinskiTangFunctionSrc from './assets/styblinski-tang-function.svg';
import {FunctionMetadata} from '../function';
function validateStyblinskiTangFunctionParams(x: number[]) {
  return x.length >= 1;
}
function styblinskiTangFunction(x: number[]): number {
  if (!validateStyblinskiTangFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  let res: number = 0;
  for (let i = 0; i < x.length; i++) {
    res += Math.pow(x[i], 4) - 16 * Math.pow(x[i], 2) + 5 * x[i];
  }
  return res / 2;
}

export const StyblinskiTangFunction: FunctionMetadata = {
  srcUrl: StyblinskiTangFunctionSrc,
  id: 'styblinskiTangFunction',
  name: 'Styblinski-Tang function',
  xMin: '[-2.903534, -2.903534, -2.903534, -2.903534, ...,-2.903534]',
  outputMin: '-39.1659*n, where n is dimension of x',
  functionToCall: styblinskiTangFunction,
  isValidParams: validateStyblinskiTangFunctionParams,
};
