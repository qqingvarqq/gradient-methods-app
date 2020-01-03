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
  const {className = '', error = false, ...rest} = props;
  const errorClassName = error ? styles.error : '';
  return (
    <input
      className={`${styles.root} ${errorClassName}  ${className} `}
      {...rest}></input>
  );
};
