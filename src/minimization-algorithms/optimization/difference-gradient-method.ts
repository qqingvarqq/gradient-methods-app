import {
  dividedDifferences,
  findEuclidNorm,
  getLenOfTheStepAndNextVector,
} from './utils';
import {OptimizationAlgoMetadata} from '../run-optimization';
function differenceGradientMethod(
  func: Function,
  x: number[],
  epsilon: number
): [number[], number] {
  let countOfSteps = 0;
  let vectorX = x;
  let alpha = 0.01;
  let h = 0.0001;
  while (true) {
    countOfSteps++;
    const fnOutputForVectorX = func(vectorX);
    const derivativeValues = dividedDifferences(
      func,
      vectorX,
      fnOutputForVectorX,
      h
    );
    const values = getLenOfTheStepAndNextVector(
      func,
      vectorX,
      fnOutputForVectorX,
      alpha,
      derivativeValues
    );
    alpha = values[0];
    const nextVectorX = values[1];
    const fnOutputForNextVectorX = values[2];
    h = Math.min(h, findEuclidNorm(derivativeValues));
    vectorX = nextVectorX;
    if (Math.abs(fnOutputForVectorX - fnOutputForNextVectorX) < epsilon) {
      break;
    }
  }
  return [vectorX, countOfSteps];
}

export const DifferenceGradientMethod: OptimizationAlgoMetadata = {
  id: 'differenceGradientMethod',
  name: 'difference-gradient method',
  method: differenceGradientMethod,
};
