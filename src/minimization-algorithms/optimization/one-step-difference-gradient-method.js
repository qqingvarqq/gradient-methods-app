export default function oneStepDifferenceGradientMethod(func, x, epsilon) {
  let vectorX = x;
  let alpha = 0.01;
  let h = 0.01;
  while (true) {
    const fnOutputForVectorX = func(vectorX);
    const derivativeVals = dividedDifferences(
      func,
      vectorX,
      fnOutputForVectorX,
      h
    );
    const vals = getLenOfTheStepAndNextVectorX(
      func,
      vectorX,
      fnOutputForVectorX,
      alpha,
      derivativeVals
    );
    alpha = vals[0];
    const nextVectorX = vals[1];
    const fnOutputForNextVectorX = vals[2];
    h = Math.min(h, findEuclidNorm(derivativeVals));
    vectorX = nextVectorX;
    if (Math.abs(fnOutputForVectorX - fnOutputForNextVectorX) < epsilon) {
      break;
    }
  }
  return vectorX;
}

function dividedDifferences(func, vectorX, fnOutputForVectorX, h) {
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    const newVectorX = [...vectorX];
    newVectorX[i] += h;
    res[i] = (func(newVectorX) - fnOutputForVectorX) / h;
  }
  return res;
}

function getLenOfTheStepAndNextVectorX(
  func,
  vectorX,
  fnOutputForVectorX,
  prevLenOfTheStep,
  derivativeVals
) {
  let nextVectorX = calculateNextValue(
    vectorX,
    prevLenOfTheStep,
    derivativeVals
  );
  let fnOutputForNextVectorX = func(nextVectorX);
  while (fnOutputForVectorX - fnOutputForNextVectorX < 0) {
    prevLenOfTheStep /= 2;
    nextVectorX = calculateNextValue(vectorX, prevLenOfTheStep, derivativeVals);
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

function findEuclidNorm(vals) {
  let norm = 0;
  for (let i = 0; i < vals.length; i++) {
    norm += Math.pow(vals[i], 2);
  }
  norm = Math.sqrt(norm);
  return norm;
}
