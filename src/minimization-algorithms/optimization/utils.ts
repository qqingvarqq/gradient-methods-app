export function dividedDifferences(
  func: Function,
  vectorX: number[],
  fnOutputForVectorX: number,
  h: number
): number[] {
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    const newVectorX = [...vectorX];
    newVectorX[i] += h;
    res[i] = (func(newVectorX) - fnOutputForVectorX) / h;
  }
  return res;
}

export function findEuclidNorm(vector: number[]): number {
  let norma = 0;
  for (let i = 0; i < vector.length; i++) {
    norma += Math.pow(vector[i], 2);
  }
  norma = Math.sqrt(norma);
  return norma;
}

export function getLenOfTheStepAndNextVector(
  func: Function,
  vectorX: number[],
  fnOutputForVectorX: number,
  prevLenOfTheStep: number,
  derivativeValues: number[]
): [number, number[], number] {
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
    prevLenOfTheStep /= 1.25;
    //case when we have almost zeroo
    if (prevLenOfTheStep === prevLenOfTheStep / 1.25) {
      break;
    }
    nextVectorX = calculateNextValue(
      vectorX,
      prevLenOfTheStep,
      derivativeValues
    );
    fnOutputForNextVectorX = func(nextVectorX);
  }
  return [prevLenOfTheStep, nextVectorX, fnOutputForNextVectorX];
}

function calculateNextValue(
  vectorX: number[],
  alpha: number,
  diff: number[]
): number[] {
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    res[i] = vectorX[i] - alpha * diff[i];
  }
  return res;
}

export function addVectorsByRule(
  ruleFn: Function,
  vectorX: number[],
  vectorY: number[]
): number[] {
  if (vectorX.length !== vectorY.length) {
    throw new Error('vectors length mismatch');
  }
  const res = new Array(vectorX.length);
  for (let i = 0; i < vectorX.length; i++) {
    res[i] = ruleFn(vectorX[i], vectorY[i]);
  }
  return res;
}
