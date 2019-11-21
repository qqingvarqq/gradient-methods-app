import * as React from 'react';
import {
  NavigationHeader,
  IconButton,
  IconButtonTypes,
} from '../../ui-components';
import {FunctionMetadata} from '../../functions';
import {FunctionInfo} from './components/function-info/function-info';
import {OptimizationResult} from './components/optimization-result/optimization-result';
import styles from './minimization-page.module.css';

export const MinimizationPage: React.FC<{
  functionToOptimize: FunctionMetadata;
  onClickGoBackMainPage: () => void;
}> = props => {
  const {functionToOptimize, onClickGoBackMainPage} = props;
  const [optimizationParams, setOptimizationParams] = React.useState<{
    epsilon: number;
    vectorX: number[];
  } | null>(null);
  /*React.useEffect(() => {
    const x = new Array(128).fill(0.5);
    const epsilon = 0.000001;
    console.log(
      runOptimization(
        oneStepDifferenceGradientMethod,
        functionToOptimize.functionToCall,
        x,
        epsilon
      )
    );
    console.log(
      runOptimization(
        twoStepDifferenceGradientMethod,
        functionToOptimize.functionToCall,
        x,
        epsilon
      )
    );
  });*/
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <NavigationHeader>
          <IconButton
            iconType={IconButtonTypes.ARROWLEFT}
            onClick={onClickGoBackMainPage}></IconButton>
        </NavigationHeader>
        <FunctionInfo
          setOptimizationParams={setOptimizationParams}
          functionToOptimize={functionToOptimize}></FunctionInfo>
        {optimizationParams!=null && <OptimizationResult></OptimizationResult>}
        {optimizationParams!=null && <OptimizationResult></OptimizationResult>}
      </div>
    </div>
  );
};
