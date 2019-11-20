import * as React from 'react';
import {Card} from '../../../../ui-components';
import styles from './optimization-result.module.css';

export const OptimizationResult: React.FC = props => {
  return (
    <Card>
      <div className={styles.root}>
        <div className={styles.header}>{'Gradienth method'}</div>
        <div className={styles.table}>
          <div className={styles.table_item}>
            <span>Count of Iterations</span>
            <div className={styles.table_item_gap}></div>
            <span>100</span>
          </div>
          <div className={styles.table_item}>
            <span>Count of calculation f(x)</span>
            <div className={styles.table_item_gap}></div>
            <span>100</span>
          </div>
          <div className={styles.table_item}>
            <span>Time spent</span>
            <div className={styles.table_item_gap}></div>
            <span>100</span>
          </div>
        </div>
        <div className={styles.minimum}>
          <div>
            x<sub>min</sub> = {'[0,0,0,0]'}
          </div>
          <div>
            f(x<sub>min</sub>) = {1}
          </div>
        </div>
      </div>
    </Card>
  );
};
