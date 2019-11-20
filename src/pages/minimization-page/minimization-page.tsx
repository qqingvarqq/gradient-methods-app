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
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <NavigationHeader>
          <IconButton
            iconType={IconButtonTypes.ARROWLEFT}
            onClick={onClickGoBackMainPage}></IconButton>
        </NavigationHeader>
        <FunctionInfo functionToOptimize={functionToOptimize}></FunctionInfo>
        <OptimizationResult></OptimizationResult>
      </div>
    </div>
  );
};
