import {
  dividedDifferences,
  findEuclidNorm,
  getLenOfTheStepAndNextVector,
  addVectorsByRule,
  getNextLenOfTheStep,
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
    alpha = getNextLenOfTheStep(values[0]);
    const nextVectorX = values[1];
    const fnOutputForNextVectorX = values[2];
    h = Math.min(h, findEuclidNorm(derivativeValues));
    const diffBetweenSteps = Math.max.apply(
      addVectorsByRule(
        (x: number, y: number) => Math.abs(x - y),
        vectorX,
        nextVectorX
      )
    );
    vectorX = nextVectorX;
    if (
      Math.abs(fnOutputForVectorX - fnOutputForNextVectorX) < epsilon &&
      diffBetweenSteps < epsilon
    ) {
      break;
    }
  }
  return [vectorX, countOfSteps];
}

export const DifferenceGradientMethod: OptimizationAlgoMetadata = {
  id: 'differenceGradientMethod',
  name: 'Difference-gradient method',
  method: differenceGradientMethod,
};
