import {twoStepDifferenceGradientMethods} from './optimization/two-step-difference-gradient-method';
import {DifferenceGradientMethod} from './optimization/difference-gradient-method';
import {OptimizationAlgoMetadata} from './run-optimization';
export * from './run-optimization';

export const optimizationMethods: Map<
  string,
  OptimizationAlgoMetadata
> = new Map([
  [DifferenceGradientMethod.id, DifferenceGradientMethod],
  ...twoStepDifferenceGradientMethods.map((algo: OptimizationAlgoMetadata): [
    string,
    OptimizationAlgoMetadata
  ] => [algo.id, algo]),
]);
