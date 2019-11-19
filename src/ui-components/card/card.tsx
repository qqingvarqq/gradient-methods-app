import * as React from 'react';
import styles from './card.module.css';

export const Card: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = props => {
  const {className = '', ...rest} = props;
  return <div className={`${styles.root} ${className}`} {...rest}></div>;
};
