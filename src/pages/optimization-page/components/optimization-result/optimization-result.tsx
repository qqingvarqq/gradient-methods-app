import * as React from 'react';
//@ts-ignore
import OptimizationWorker from '../../../../workers/optimization.worker.js';
import {FunctionMetadata} from '../../../../functions';
import {OptimizationPageWorkerMessageTypes} from '../../../../workers/worker-messages';
import {Card, Button} from '../../../../ui-components';
import {
  OptimizationAlgoMetadata,
  OptimizationResultData,
} from '../../../../optimization-algorithms';

import styles from './optimization-result.module.css';

export interface OptimizationParams {
  epsilon: number;
  vectorX: number[];
}
export const OptimizationResult: React.FC<{
  optimizationParams: OptimizationParams;
  optimizationAlgoMetadata: OptimizationAlgoMetadata;
  functionToOptimize: FunctionMetadata;
}> = (props) => {
  const {
    optimizationAlgoMetadata,
    optimizationParams,
    functionToOptimize,
  } = props;
  const [
    optimizationResultData,
    setOptimizationResultData,
  ] = React.useState<OptimizationResultData | null>(null);
  const [showVectorXmin, setShowVectorXmin] = React.useState(false);
  React.useEffect(() => {
    setOptimizationResultData(null);
    let worker: Worker = new OptimizationWorker();
    worker.postMessage([
      OptimizationPageWorkerMessageTypes.OPTIMIZE_FUNCTION,
      optimizationParams.vectorX,
      optimizationParams.epsilon,
      functionToOptimize.id,
      optimizationAlgoMetadata.id,
    ]);
    worker.addEventListener('message', (event: MessageEvent) => {
      const data: [OptimizationPageWorkerMessageTypes, OptimizationResultData] =
        event.data;
      const [messageType, result] = data;
      if (
        messageType !== OptimizationPageWorkerMessageTypes.RSULT_OF_OPTIMIZATION
      ) {
        return;
      }
      setOptimizationResultData(result);
    });
    return () => {
      worker.terminate();
    };
  }, [optimizationAlgoMetadata, optimizationParams, functionToOptimize]);
  React.useEffect(() => setShowVectorXmin(false), [optimizationResultData]);
  return (
    <Card>
      <div className={styles.root}>
        {optimizationResultData !== null ? (
          <>
            <div className={styles.header}>{optimizationAlgoMetadata.name}</div>
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
                x<sub>min</sub> ={' '}
                {showVectorXmin ? (
                  optimizationResultData.xMin.join(' ')
                ) : (
                  <Button
                    className={styles.more_info}
                    secondary
                    onClick={() => setShowVectorXmin(true)}>
                    ... show {optimizationResultData.xMin.length} items
                  </Button>
                )}
              </div>
              <div>
                f(x<sub>min</sub>) = {optimizationResultData.outputMin}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.loading_container}>
            <div className={styles.loading_spinner} />
            <div>calculating...</div>
          </div>
        )}
      </div>
    </Card>
  );
};
