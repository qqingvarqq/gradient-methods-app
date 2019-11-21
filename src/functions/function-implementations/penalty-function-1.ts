import PenaltyFunction1Src from './assets/penalty-function-1.svg';
import {FunctionMetadata} from '../function';
function validatePenaltyFunction1Params(x: number[]) {
  return x.length >= 2;
}
function penaltyFunction1(x: number[]): number {
  if (!validatePenaltyFunction1Params(x)) {
    throw new Error(`x :${x} should be array with length at least 2`);
  }
  let firstSum: number = 0;
  let secondSum: number = 0;
  for (let i = 0; i < x.length; i++) {
    firstSum += Math.pow(x[i] - 1, 2);
    secondSum += Math.pow(x[i], 2);
  }
  firstSum *= 10 ** -5;
  secondSum -= 0.25;
  secondSum *= secondSum;
  return firstSum + secondSum;
}

export const PenaltyFunction1: FunctionMetadata = {
  srcUrl: PenaltyFunction1Src,
  id: 'penaltyFunction1',
  name: 'Penalty function 1',
  xMin: '(point depends from dimension of the input)',
  outputMin: '(output depends from dimension of the input)',
  functionToCall: penaltyFunction1,
  isValidParams: validatePenaltyFunction1Params,
};
