import * as React from 'react';
import styles from './base-button.module.css';

export interface BaseButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export const BaseButton: React.FC<BaseButtonProps> = props => {
  const {className, ...rest} = props;
  return <button className={`${styles.root} ${className}`} {...rest}></button>;
};
