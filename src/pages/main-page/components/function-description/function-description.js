import React from 'react';
import './function-description.css';
import PenaltyFunction1Image from '../../../assets/penalty-function-1.svg';
import PenaltyFunction2Image from '../../../assets/penalty-function-2.svg';
import RosenbrockFunctionImage from '../../../assets/rosenbrock-function.svg';
import PowellFunctionImage from '../../../assets/powell-function.svg';

function getImageDescription(name) {
  switch (name) {
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

export default function FunctionDescription(props) {
  const {description, name, ...rest} = props;
  return (
    <div className="function-description" {...rest}>
      <div className="info">{description}</div>
      <div className="divider"></div>
      <img className={'function'} alt={name} src={getImageDescription(name)} />
    </div>
  );
}
