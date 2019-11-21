import {
  dividedDifferences,
  getLenOfTheStepAndNextVector,
  findEuclidNorm,
  addVectors,
} from './utils';
import {OptimizationAlgoMetadata} from '../run-optimization';
function twoStepDifferenceGradientMethod(
  func: Function,
  x: number[],
  epsilon: number
): [number[], number] {
  let countOfSteps = 0;
  let vectorX = x;
  let alpha = 0.01;
  let beta = 0.01;
  let h1 = 0.0001;
  let h2 = 0.0001;
  while (true) {
    countOfSteps++;
    const fnOutputForVectorX = func(vectorX);
    const derivativeValuesU = dividedDifferences(
      func,
      vectorX,
      fnOutputForVectorX,
      h1
    );
    const valuesU = getLenOfTheStepAndNextVector(
      func,
      vectorX,
      fnOutputForVectorX,
      alpha,
      derivativeValuesU
    );
    alpha = valuesU[0];
    const vectorU = valuesU[1];
    const step2VectorX = addVectors(
      (x: number, y: number) => (x + y) / 2,
      vectorU,
      vectorX
    );
    const step2FnOutputForVectorX = func(step2VectorX);
    const derivativeValuesStep2 = dividedDifferences(
      func,
      step2VectorX,
      step2FnOutputForVectorX,
      h2
    );
    const valuesStep2 = getLenOfTheStepAndNextVector(
      func,
      vectorX,
      fnOutputForVectorX,
      beta,
      derivativeValuesStep2
    );
    beta = valuesStep2[0];
    const nextVectorX = valuesStep2[1];
    const fnOutputForNextVectorX = valuesStep2[2];
    h1 = Math.min(h1, findEuclidNorm(derivativeValuesU));
    h2 = Math.min(h2, findEuclidNorm(derivativeValuesStep2));
    vectorX = nextVectorX;
    if (Math.abs(fnOutputForVectorX - fnOutputForNextVectorX) < epsilon) {
      break;
    }
  }
  return [vectorX, countOfSteps];
}

export const TwoStepDifferenceGradientMethod: OptimizationAlgoMetadata = {
  id: 'twoStepDifferenceGradientMethod',
  name: 'Two-step method based on a difference-gradient method',
  method: twoStepDifferenceGradientMethod,
};
