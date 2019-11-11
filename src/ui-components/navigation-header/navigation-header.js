import React from 'react';
import './navigation-header.css';

export default function NavigationHeader(props) {
  const {className, ...rest} = props;
  const classNames = 'navigation-header ' + (className || '');
  return <div className={classNames} {...rest}></div>;
}
