import {PenaltyFunction1} from './function-implementations/penalty-function-1';
import {PenaltyFunction2} from './function-implementations/penalty-function-2';
import {RosenbrockFunction} from './function-implementations/rosenbrock-function';
import {PowellFunction} from './function-implementations/powell-function';
import {ZakharovFunction} from './function-implementations/zakharov-function';
import {DixonPriceFunction} from './function-implementations/dixon-price-function';
import {StyblinskiTangFunction} from './function-implementations/styblinski-tang-function';
import {PermFunctionBeta} from './function-implementations/perm-function-beta';
import {SumSquaresFunction} from './function-implementations/sum-squares-function';
import {FunctionMetadata} from './function';
export * from './function';

export const functionsToOptimize: Map<string, FunctionMetadata> = new Map([
  [PenaltyFunction1.id, PenaltyFunction1],
  [PermFunctionBeta.id, PermFunctionBeta],
  [RosenbrockFunction.id, RosenbrockFunction],
  [DixonPriceFunction.id, DixonPriceFunction],
  [ZakharovFunction.id, ZakharovFunction],
  [PowellFunction.id, PowellFunction],
  [StyblinskiTangFunction.id, StyblinskiTangFunction],
  [PenaltyFunction2.id, PenaltyFunction2],
  [SumSquaresFunction.id, SumSquaresFunction],
]);
