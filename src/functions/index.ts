import {PenaltyFunction1} from './function-implementations/penalty-function-1';
import {PenaltyFunction2} from './function-implementations/penalty-function-2';
import {ExtendedRosenbrockFunction} from './function-implementations/extended-rosenbrock-function';
import {ExtendedPowellFunction} from './function-implementations/extended-powell-function';
import {ZakharovFunction} from './function-implementations/zakharov-function';
import {DixonPriceFunction} from './function-implementations/dixon-price-function';
import {StyblinskiTangFunction} from './function-implementations/styblinski-tang-function';
import {PermFunctionBeta} from './function-implementations/perm-function-beta';
import {SumSquaresFunction} from './function-implementations/sum-squares-function';
import {ExtendedHimmelblauFunction} from './function-implementations/extended-himmelblau-function';
import {ExtendedMieleAndCantrellFunction} from './function-implementations/extended-miele-cantrell-function';
import {FunctionMetadata} from './function';
export * from './function';

const functionsEntries: Array<[string, FunctionMetadata]> = [
  [PenaltyFunction1.id, PenaltyFunction1],
  [PermFunctionBeta.id, PermFunctionBeta],
  [ExtendedRosenbrockFunction.id, ExtendedRosenbrockFunction],
  [DixonPriceFunction.id, DixonPriceFunction],
  [ZakharovFunction.id, ZakharovFunction],
  [ExtendedPowellFunction.id, ExtendedPowellFunction],
  [StyblinskiTangFunction.id, StyblinskiTangFunction],
  [PenaltyFunction2.id, PenaltyFunction2],
  [SumSquaresFunction.id, SumSquaresFunction],
  [ExtendedHimmelblauFunction.id, ExtendedHimmelblauFunction],
  [ExtendedMieleAndCantrellFunction.id, ExtendedMieleAndCantrellFunction],
];
functionsEntries.sort((first, second) =>
  first[1].name.localeCompare(second[1].name)
);
export const functionsToOptimize: Map<string, FunctionMetadata> = new Map(
  functionsEntries
);
