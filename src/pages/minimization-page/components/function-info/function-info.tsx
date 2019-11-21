import * as React from 'react';
import {Card, SubmitButton, Input} from '../../../../ui-components';
import {FunctionMetadata} from '../../../../functions';
import styles from './function-info.module.css';

export const FunctionInfo: React.FC<{
  functionToOptimize: FunctionMetadata;
  setOptimizationParams: Function;
}> = props => {
  const {functionToOptimize, setOptimizationParams} = props;
  const [epsilonInput, setEpsilonInput] = React.useState<string>('0.0001');
  const [epsilonInputError, setEpsilonInputError] = React.useState<boolean>(
    false
  );
  const [vectorXInput, setVectorXInput] = React.useState<string>(
    `2,2,2,2,2,2,2,2`
  );
  const [vectorXInputError, setVectorXInputError] = React.useState<boolean>(
    false
  );
  const optimize = () => {
    let isValid = true;
    const epsilon = parseFloat(epsilonInput);
    if (isNaN(epsilon) || epsilon <= 0) {
      isValid = false;
      setEpsilonInputError(true);
    }
    const vectorX = vectorXInput.split(',').map(parseFloat);
    if (
      vectorX.find(val => isNaN(val)) === undefined &&
      !functionToOptimize.isValidParams(vectorX)
    ) {
      isValid = false;
      setVectorXInputError(true);
    }
    if (isValid) {
      setOptimizationParams({epsilon, vectorX});
    }
  };
  return (
    <Card>
      <sub className={styles.root}>
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
        <sub className={styles.input_form}>
          <div className={styles.vector_x}>
            <div>
              x<sub>0</sub> =
            </div>
            <Input
              type="text"
              onBlur={() => setVectorXInputError(false)}
              error={vectorXInputError}
              value={vectorXInput}
              onChange={e => setVectorXInput(e.target.value)}
              placeholder="Enter initial vector X"></Input>
          </div>
          <div className={styles.epsilon}>
            <div>e =</div>
            <Input
              type="number"
              onBlur={() => setEpsilonInputError(false)}
              error={epsilonInputError}
              value={epsilonInput}
              onChange={e => setEpsilonInput(e.target.value)}
              placeholder="Enter epsilon"></Input>
          </div>
          <div className={styles.optimize}>
            <SubmitButton onClick={optimize}>Optimize</SubmitButton>
          </div>
        </sub>
      </sub>
    </Card>
  );
};
