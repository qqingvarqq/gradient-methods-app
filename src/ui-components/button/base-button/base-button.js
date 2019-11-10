import React from 'react';
import './base-button.css';

export default function BaseButton(props) {
  const {className, children, ...rest} = props;
  const classNames = 'base-button ' + (className || '');
  return (
    <div role="button" className={classNames} {...rest}>
      {children}
    </div>
  );
}
