import React from 'react';
import './function-description.css';
import {getImage} from '../../../page-utils/';

export default function FunctionDescription(props) {
  const {description, name, ...rest} = props;
  return (
    <div className="function-description" {...rest}>
      <div className="info">{description}</div>
      <div className="divider"></div>
      <img className={'function'} alt={name} src={getImage(name)} />
    </div>
  );
}
