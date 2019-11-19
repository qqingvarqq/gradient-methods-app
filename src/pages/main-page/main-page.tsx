import * as React from 'react';
import {FunctionShortInfo} from './components/function-short-info/function-short-info';
import {FunctionMetadata} from '../../functions';
import styles from './main-page.module.css';

export const MainPage: React.FC<{
  functionsToOptimize: FunctionMetadata[];
  onClickFunctionOption: (index: number) => void;
}> = props => {
  const {functionsToOptimize, onClickFunctionOption} = props;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header} title="Chose function to minimize">
          Chose function
        </div>
        <div className={styles.options_container}>
          {functionsToOptimize.map(
            (functionMetadata: FunctionMetadata, index: number) => (
              <FunctionShortInfo
                key={index}
                functionMetadata={functionMetadata}
                onClick={() => onClickFunctionOption(index)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
