import {PenaltyFunction1} from './function-implementations/penalty-function-1';
import {PenaltyFunction2} from './function-implementations/penalty-function-2';
import {RosenbrockFunction} from './function-implementations/rosenbrock-function';
import {PowellFunction} from './function-implementations/powell-function';
import {FunctionMetadata} from './function';
export * from './function';

export const functionsToOptimize: Map<string, FunctionMetadata> = new Map([
  [PenaltyFunction1.id, PenaltyFunction1],
  [PenaltyFunction2.id, PenaltyFunction2],
  [RosenbrockFunction.id, RosenbrockFunction],
  [PowellFunction.id, PowellFunction],
]);
