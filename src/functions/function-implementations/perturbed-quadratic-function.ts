import PerturbedQuadraticFunctionSrc from './assets/perturbed-quadratic-function.svg';
import {FunctionMetadata} from '../function';
function validatePerturbedQuadraticFunctionParams(x: number[]) {
  return x.length >= 1;
}
function perturbedQuadraticFunction(x: number[]): number {
  if (!validatePerturbedQuadraticFunctionParams(x)) {
    throw new Error(`x :${x} should be array with length at least 1`);
  }
  let firstSum: number = 0;
  let secondSum: number = 0;
  for (let i = 0; i < x.length; i++) {
    firstSum += (i + 1) * Math.pow(x[i], 2);
    secondSum += x[i];
  }
  return firstSum + 0.01 * Math.pow(secondSum, 2);
}

export const PerturbedQuadraticFunction: FunctionMetadata = {
  srcUrl: PerturbedQuadraticFunctionSrc,
  id: 'perturbedQuadraticFunction',
  name: 'Perturbed Quadratic function',
  xMin: '[0, 0, 0, ... 0, 0]',
  outputMin: '0',
  functionToCall: perturbedQuadraticFunction,
  isValidParams: validatePerturbedQuadraticFunctionParams,
};
