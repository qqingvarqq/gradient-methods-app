import * as React from 'react';
import styles from './button.module.css';
import {BaseButton, BaseButtonProps} from '../base-button/base-button';

export const Button: React.FC<BaseButtonProps & {
  accent?: boolean;
}> = props => {
  const {className = '', accent, ...rest} = props;

  return (
    <BaseButton
      className={`${styles.root} ${accent && styles.accent} ${className}`}
      {...rest}
    />
  );
};
