import PenaltyFunction1Image from '../assets/penalty-function-1.svg';
import PenaltyFunction2Image from '../assets/penalty-function-2.svg';
import RosenbrockFunctionImage from '../assets/rosenbrock-function.svg';
import PowellFunctionImage from '../assets/powell-function.svg';

export function getImage(functionId) {
  switch (functionId) {
    case 'penalty-function-1':
      return PenaltyFunction1Image;
    case 'penalty-function-2':
      return PenaltyFunction2Image;
    case 'rosenbrock-function':
      return RosenbrockFunctionImage;
    case 'powell-function':
      return PowellFunctionImage;
    default:
      return null;
  }
}
