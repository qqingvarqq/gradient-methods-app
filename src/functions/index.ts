import {PenaltyFunction1} from './function-implementations/penalty-function-1';
import {PenaltyFunction2} from './function-implementations/penalty-function-2';
import {RosenbrockFunction} from './function-implementations/rosenbrock-function';
import {PowellFunction} from './function-implementations/powell-function';
import {FunctionMetadata} from './function';
export * from './function';

export const FunctionsToOptimize: FunctionMetadata[] = [
  PenaltyFunction1,
  PenaltyFunction2,
  RosenbrockFunction,
  PowellFunction,
];
