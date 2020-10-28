import * as React from 'react';
import {FunctionShortInfo} from './components/function-short-info/function-short-info';
import {FunctionMetadata} from '../../functions';
import styles from './main-page.module.css';

export const MainPage: React.FC<{
  functionsToOptimize: FunctionMetadata[];
  onClickFunctionOption: (index: string) => void;
}> = (props) => {
  const {functionsToOptimize, onClickFunctionOption} = props;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header} title="Chose function to minimize">
          Choose function
        </div>
        <div className={styles.options_container}>
          {functionsToOptimize.map((functionMetadata: FunctionMetadata) => (
            <FunctionShortInfo
              key={functionMetadata.id}
              functionMetadata={functionMetadata}
              onClick={() => onClickFunctionOption(functionMetadata.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
