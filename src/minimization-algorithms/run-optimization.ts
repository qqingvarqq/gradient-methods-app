export interface OptimizationAlgoMetadata {
  id: string;
  name: string;
  method: Function;
}
export interface OptimizationResultData {
  /*name: string;*/
  countOfIteration: number;
  countOfCalculationFX: number;
  timeInMs: number;
  outputMin: number;
  xMin: number[];
}
class FunctionToCall {
  private fn: Function;
  private callCount: number;
  constructor(_fn: Function) {
    this.fn = _fn;
    this.callCount = 0;
  }
  callFn(x: number[]) {
    this.callCount++;
    return this.fn(x);
  }
  getCallCount(): number {
    return this.callCount;
  }
}
function calculatePrecision(epsilon: number) {
  let precision = 0;
  while (epsilon < 1) {
    epsilon *= 10;
    precision++;
  }
  return precision;
}
export function runOptimization(
  method: Function,
  fn: Function,
  x: number[],
  epsilon: number
): OptimizationResultData {
  const floatNumberPrecision = calculatePrecision(epsilon);
  const wrapedFn = new FunctionToCall(fn);
  const fnToCall = wrapedFn.callFn.bind(wrapedFn);
  const t1 = performance.now();
  const [xMinUnrounded, countOfIteration] = method(fnToCall, x, epsilon);
  const t2 = performance.now();
  const countOfCalculationFX = wrapedFn.getCallCount();
  const outputMin = fn(xMinUnrounded).toFixed(floatNumberPrecision);
  const xMin = xMinUnrounded.map((num: number) =>
    num.toFixed(floatNumberPrecision)
  );
  const timeInMs = Math.round(t2 - t1);
  return {
    xMin,
    outputMin,
    countOfIteration,
    countOfCalculationFX,
    timeInMs,
  };
}
