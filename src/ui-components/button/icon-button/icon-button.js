import React from 'react';
import './icon-button.css';
import {BaseButton} from '../base-button';

function getIcon(type) {
  switch (type) {
    case 'arrowLeft':
      return '←';

    default:
      return '';
  }
}
function getInlineStyles(size) {
  return {height: size, width: size, fontSize: size};
}

export default function IconButton(props) {
  const {type, size = '48px', className, ...rest} = props;
  const classNames = 'icon-button ' + (className || '');
  const icon = getIcon(type);
  const cssStyles = getInlineStyles(size);
  return (
    <BaseButton style={cssStyles} className={classNames} {...rest}>
      {icon}
    </BaseButton>
  );
}
