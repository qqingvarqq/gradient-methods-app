import {
  dividedDifferences,
  getLenOfTheStepAndNextVector,
  findEuclidNorm,
  addVectorsByRule,
  getNextLenOfTheStep,
} from './utils';
import {OptimizationAlgoMetadata} from '../run-optimization';
function twoStepDifferenceGradientMethod(
  func: Function,
  x: number[],
  epsilon: number,
  gamma: number
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
    alpha = getNextLenOfTheStep(alpha, valuesU[0]);
    const vectorU = valuesU[1];
    const step2VectorX = addVectorsByRule(
      (x: number, y: number) => gamma * x + (1 - gamma) * y,
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
    beta = getNextLenOfTheStep(beta, valuesStep2[0]);
    const nextVectorX = valuesStep2[1];
    const fnOutputForNextVectorX = valuesStep2[2];
    h1 = Math.min(h1, findEuclidNorm(derivativeValuesU));
    h2 = Math.min(h2, findEuclidNorm(derivativeValuesStep2));
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

const gamma: number[] = [0.1, 0.3, 0.5, 0.6, 0.8];

function getTwoStepDifferenceGradientMethod(
  gamma: number
): OptimizationAlgoMetadata {
  return {
    id: `twoStepDifferenceGradientMethodWithGamma${gamma}`,
    name: `Two-step difference-gradient method with γ = ${gamma}`,
    method: (func: Function, x: number[], epsilon: number) =>
      twoStepDifferenceGradientMethod(func, x, epsilon, gamma),
  };
}

export const twoStepDifferenceGradientMethods: OptimizationAlgoMetadata[] = gamma.map(
  getTwoStepDifferenceGradientMethod
);
