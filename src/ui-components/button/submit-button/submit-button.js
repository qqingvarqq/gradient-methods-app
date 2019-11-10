import React from 'react';
import './submit-button.css';
import {BaseButton} from '../base-button';

export default function SubmitButton(props) {
  const {className, ...rest} = props;
  const classNames = 'submit-button ' + (className || '');
  return <BaseButton className={classNames} {...rest} />;
}
