import PenaltyFunction2Src from './assets/penalty-function-2.svg';
import {FunctionMetadata} from '../function';

function validatePenaltyFunction2Params(x: number[]) {
  return x.length >= 2;
}
function penaltyFunction2(x: number[]): number {
  if (!validatePenaltyFunction2Params(x)) {
    throw new Error(`x :${x} should be array with length at least 2`);
  }
  let firstSum: number = 0;
  let secondSum: number = 0;
  for (let i = 0; i < x.length; i++) {
    firstSum += Math.pow(x[i] - 1, 2);
    secondSum += Math.pow(x[i], 2);
  }
  secondSum -= 0.25;
  secondSum = Math.pow(10, -3) * secondSum * secondSum;
  return firstSum + secondSum;
}

export const PenaltyFunction2: FunctionMetadata = {
  srcUrl: PenaltyFunction2Src,
  id: 'PenaltyFunction2',
  name: 'Penalty function 2',
  xMin: '(point depends from dimension of the input)',
  outputMin: '(output depends from dimension of the input)',
  functionToCall: penaltyFunction2,
  isValidParams: validatePenaltyFunction2Params,
};
