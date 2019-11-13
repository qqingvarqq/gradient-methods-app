import {
  dividedDifferences,
  getLenOfTheStepAndNextVector,
  findEuclidNorm,
  addVectors,
} from './utils.js';
let count = 1;
export default function twoStepDifferenceGradientMethod(func, x, epsilon) {
  let vectorX = x;
  let alpha = 0.01;
  let beta = 0.01;
  let h1 = 0.0001;
  let h2 = 0.0001;
  while (true) {
    count++;
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
    const step2VectorX = addVectors((x, y) => (x + y) / 2, vectorU, vectorX);
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
  console.log('TWO: ', count);
  return vectorX;
}
