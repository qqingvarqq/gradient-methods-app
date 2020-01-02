import * as React from 'react';
import styles from './icon-button.module.css';
import {BaseButton, BaseButtonProps} from '../base-button/base-button';

export enum IconButtonTypes {
  ARROW_LEFT = 'ARROW_LEFT',
  ARROW_RIGHT = 'ARROW_RIGHT',
}

function getIcon(iconType?: IconButtonTypes): string {
  switch (iconType) {
    case IconButtonTypes.ARROW_LEFT:
      return '←';
    case IconButtonTypes.ARROW_RIGHT:
      return '→';
    default:
      return '';
  }
}

function getInlineStyles(size: string) {
  return {height: size, width: size, fontSize: size};
}

interface IconButtonProps extends BaseButtonProps {
  size?: string;
  iconType: IconButtonTypes;
}

export const IconButton: React.FC<IconButtonProps> = (
  props: IconButtonProps
) => {
  const {iconType, size = '48px', className = '', ...rest} = props;
  const icon = getIcon(iconType);
  const cssStyles = getInlineStyles(size);
  return (
    <BaseButton
      style={cssStyles}
      className={`${styles.root} ${className}`}
      {...rest}>
      {icon}
    </BaseButton>
  );
};
