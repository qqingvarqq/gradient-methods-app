import * as React from 'react';
//@ts-ignore
import MinimizationWorker from '../../../../workers/minimization.worker.js';
import {FunctionMetadata} from '../../../../functions';
import {MinimizationWorkerMessageTypes} from '../../../../workers/worker-messages';
import {Card} from '../../../../ui-components';
import {
  OptimizationAlgoMetadata,
  OptimizationResultData,
} from '../../../../minimization-algorithms';

import styles from './optimization-result.module.css';

export interface OptimizationParams {
  epsilon: number;
  vectorX: number[];
}
export const OptimizationResult: React.FC<{
  optimizationParams: OptimizationParams;
  optimizationAlgoMetadata: OptimizationAlgoMetadata;
  functionToOptimize: FunctionMetadata;
}> = props => {
  const {
    optimizationAlgoMetadata,
    optimizationParams,
    functionToOptimize,
  } = props;
  const [
    optimizationResultData,
    setOptimizationResultData,
  ] = React.useState<OptimizationResultData | null>(null);
  React.useEffect(() => {
    setOptimizationResultData(null);
    let worker: Worker = new MinimizationWorker();
    worker.postMessage([
      MinimizationWorkerMessageTypes.OPTIMIZE_FUNCTION,
      optimizationParams.vectorX,
      optimizationParams.epsilon,
      functionToOptimize.id,
      optimizationAlgoMetadata.id,
    ]);
    worker.addEventListener('message', (event: MessageEvent) => {
      const data: [MinimizationWorkerMessageTypes, OptimizationResultData] =
        event.data;
      const [messageType, result] = data;
      if (
        messageType !== MinimizationWorkerMessageTypes.RSULT_OF_OPTIMIZATION
      ) {
        return;
      }
      setOptimizationResultData(result);
    });
    return () => {
      worker.terminate();
    };
  }, [optimizationAlgoMetadata, optimizationParams, functionToOptimize]);
  return (
    <Card>
      <div className={styles.root}>
        {optimizationResultData !== null ? (
          <>
            <div className={styles.header}>{'Gradienth method'}</div>
            <div className={styles.table}>
              <div className={styles.table_item}>
                <span>Count of Iterations</span>
                <div className={styles.table_item_gap}></div>
                <span>{optimizationResultData.countOfIteration}</span>
              </div>
              <div className={styles.table_item}>
                <span>Count of calculation f(x)</span>
                <div className={styles.table_item_gap}></div>
                <span>{optimizationResultData.countOfCalculationFX}</span>
              </div>
              <div className={styles.table_item}>
                <span>Time spent</span>
                <div className={styles.table_item_gap}></div>
                <span>{optimizationResultData.timeInMs + 'ms'}</span>
              </div>
            </div>
            <div className={styles.minimum}>
              <div>
                x<sub>min</sub> = {optimizationResultData.xMin}
              </div>
              <div>
                f(x<sub>min</sub>) = {optimizationResultData.outputMin}
              </div>
            </div>
          </>
        ) : (
          'loading'
        )}
      </div>
    </Card>
  );
};
