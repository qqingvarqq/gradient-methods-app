import * as React from 'react';
import {FunctionMetadata} from '../../../../functions';
import styles from './function-short-info.module.css';

export const FunctionShortInfo: React.FC<{
  functionMetadata: FunctionMetadata;
  onClick: () => void;
}> = props => {
  const {functionMetadata, ...rest} = props;
  return (
    <div className={styles.root} {...rest}>
      <div className={styles.info}>{functionMetadata.name}</div>
      <div className={styles.divider}></div>
      <img
        className={styles.function_img}
        alt={functionMetadata.name}
        src={functionMetadata.srcUrl}
      />
    </div>
  );
};
