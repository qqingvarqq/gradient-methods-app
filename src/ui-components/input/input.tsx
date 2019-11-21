import * as React from 'react';
import styles from './input.module.css';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
}
export const Input: React.FC<InputProps> = props => {
  const {className, error, ...rest} = props;
  return (
    <input
      className={`${styles.root} ${error && styles.error}  ${className} `}
      {...rest}></input>
  );
};
