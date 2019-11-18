import * as React from 'react';
import styles from './navigation-header.module.css';

export const NavigationHeader: React.FC = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const {className = '', ...rest} = props;
  return <div className={`${styles.root} ${className}`} {...rest}></div>;
};
