import * as React from 'react';
import styles from './card.module.css';

export const Card: React.FC = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const {className = '', ...rest} = props;
  return <div className={`${styles.root} ${className}`} {...rest}></div>;
};
