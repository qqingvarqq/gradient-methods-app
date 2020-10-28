import * as React from 'react';
import styles from './button.module.css';
import {BaseButton, BaseButtonProps} from '../base-button/base-button';

export const Button: React.FC<
  BaseButtonProps & {
    secondary?: boolean;
  }
> = (props) => {
  const {className = '', secondary, ...rest} = props;

  return (
    <BaseButton
      className={`${styles.root} ${secondary && styles.secondary} ${className}`}
      {...rest}
    />
  );
};
