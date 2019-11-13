import {
  dividedDifferences,
  findEuclidNorm,
  getLenOfTheStepAndNextVector,
} from './utils.js';
let count = 1;
export default function oneStepDifferenceGradientMethod(func, x, epsilon) {
  let vectorX = x;
  let alpha = 0.01;
  let h = 0.0001;
  while (true) {
    count++;
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
  console.log('ONE: ', count);
  return vectorX;
}
