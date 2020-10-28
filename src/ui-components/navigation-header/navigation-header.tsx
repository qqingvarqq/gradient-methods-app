import * as React from 'react';
import styles from './navigation-header.module.css';

export const NavigationHeader: React.FC<React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = (props) => {
  const {className = '', ...rest} = props;
  return <div className={`${styles.root} ${className}`} {...rest}></div>;
};
