import * as React from 'react';
import styles from './submit-button.module.css';
import {BaseButton, BaseButtonProps} from '../base-button/base-button';

export const SubmitButton: React.FC<BaseButtonProps> = props => {
  const {className = '', ...rest} = props;
  return <BaseButton className={`${styles.root} ${className}`} {...rest} />;
};
