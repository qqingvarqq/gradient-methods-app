import * as React from 'react';
import {Card, SubmitButton} from '../../../../ui-components';
import {FunctionMetadata} from '../../../../functions';
import styles from './function-info.module.css';

export const FunctionInfo: React.FC<{
  functionToOptimize: FunctionMetadata;
}> = props => {
  const {functionToOptimize} = props;
  return (
    <Card>
      <div className={styles.root}>
        <div className={styles.about}>
          <div className={styles.about_header}>{functionToOptimize.name}</div>
          <img
            className={styles.about_function}
            alt={functionToOptimize.name}
            src={functionToOptimize.srcUrl}
          />
          <div className={styles.about_minimum}>
            <div>
              x<sub>min</sub> = {functionToOptimize.xMin}
            </div>
            <div>
              f(x<sub>min</sub>) = {functionToOptimize.outputMin}
            </div>
          </div>
        </div>
        <div className={styles.gap} />
        <div className={styles.input_form}>
          <div className={styles.vector_x}>
            x<sub>0</sub> = [10,10,10,10,...]
          </div>
          <div className={styles.epsilon}>e = 0.000001</div>
          <div className={styles.optimize}>
            <SubmitButton>Optimize</SubmitButton>
          </div>
        </div>
      </div>
    </Card>
  );
};
