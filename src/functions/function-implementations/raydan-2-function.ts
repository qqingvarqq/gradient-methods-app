import Raydan2FunctionSrc from './assets/raydan-2-function.svg';
import {FunctionMetadata} from '../function';
function validateRaydan2FunctionParams(x: number[]) {
  return x.length >= 1;
}
function raydan2Function(x: number[]): number {
  if (!validateRaydan2FunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  let res: number = 0;
  for (let i = 0; i < x.length; i++) {
    res += Math.exp(x[i]) - x[i];
  }
  return res;
}

export const Raydan2Function: FunctionMetadata = {
  srcUrl: Raydan2FunctionSrc,
  id: 'raydan2Function',
  name: 'Raydan 2 function',
  xMin: '[0, 0, 0, 0, ... 0, 0]',
  outputMin: 'n,  where n is dimension of x',
  functionToCall: raydan2Function,
  isValidParams: validateRaydan2FunctionParams,
};
