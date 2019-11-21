export interface OptimizationAlgoMetadata {
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
export function runOptimization(
  method: Function,
  fn: Function,
  x: number[],
  epsilon: number
): OptimizationResultData {
  const wrapedFn = new FunctionToCall(fn);
  const fnToCall = wrapedFn.callFn.bind(wrapedFn);
  const t1 = performance.now();
  const [xMin, countOfIteration] = method(fnToCall, x, epsilon);
  const t2 = performance.now();
  const countOfCalculationFX = wrapedFn.getCallCount();
  const outputMin = fn(xMin);
  const timeInMs = t2 - t1;
  return {
    xMin,
    outputMin,
    countOfIteration,
    countOfCalculationFX,
    timeInMs,
  };
}
