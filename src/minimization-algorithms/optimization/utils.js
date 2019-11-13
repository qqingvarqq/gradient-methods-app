export function dividedDifferences(func, vectorX, fnOutputForVectorX, h) {
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    const newVectorX = [...vectorX];
    newVectorX[i] += h;
    res[i] = (func(newVectorX) - fnOutputForVectorX) / h;
  }
  return res;
}
export function findEuclidNorm(vals) {
  let norm = 0;
  for (let i = 0; i < vals.length; i++) {
    norm += Math.pow(vals[i], 2);
  }
  norm = Math.sqrt(norm);
  return norm;
}
export function getLenOfTheStepAndNextVector(
  func,
  vectorX,
  fnOutputForVectorX,
  prevLenOfTheStep,
  derivativeValues
) {
  let nextVectorX = calculateNextValue(
    vectorX,
    prevLenOfTheStep,
    derivativeValues
  );
  let fnOutputForNextVectorX = func(nextVectorX);
  const upperLimitation = Math.pow(findEuclidNorm(derivativeValues), 2) * 0.5;
  while (
    fnOutputForVectorX - fnOutputForNextVectorX <=
    upperLimitation * prevLenOfTheStep
  ) {
    prevLenOfTheStep /= 2;
    nextVectorX = calculateNextValue(
      vectorX,
      prevLenOfTheStep,
      derivativeValues
    );
    fnOutputForNextVectorX = func(nextVectorX);
  }
  return [prevLenOfTheStep, nextVectorX, fnOutputForNextVectorX];
}

function calculateNextValue(vectorX, alpha, diff) {
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    res[i] = vectorX[i] - alpha * diff[i];
  }
  return res;
}
export function addVectors(sumFn, vectorX, vectorY) {
  if (vectorX.length !== vectorY.length) {
    throw new Error('vectors length mismatch');
  }
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    res[i] = sumFn(vectorX[i], vectorY[i]);
  }
  return res;
}
