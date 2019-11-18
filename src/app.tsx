import * as React from 'react';
import {MainPage} from './pages/main-page';
import {MinimizationPage} from './pages/minimization-page';
import styles from './app.module.css';
import {penaltyFunction1} from './minimization-algorithms/functions';
import {
  oneStepDifferenceGradientMethod,
  twoStepDifferenceGradientMethod,
} from './minimization-algorithms/optimization';
const metadata = [
  {name: 'penalty-function-1', description: 'Penalty Function 1'},
  {name: 'penalty-function-2', description: 'Penalty Function 2'},
  {name: 'rosenbrock-function', description: 'Rosenbrock Function'},
  {name: 'powell-function', description: 'Powell Function'},
];
function testOptimization() {
  const epsilon = 0.00001;
  const startVal = new Array(70).fill(1);
  console.log(startVal, penaltyFunction1(startVal));
  const optimizedVal1 = oneStepDifferenceGradientMethod(
    penaltyFunction1,
    startVal,
    epsilon
  );
  console.log(optimizedVal1, Math.round(penaltyFunction1(optimizedVal1)));
  const optimizedVal2 = twoStepDifferenceGradientMethod(
    penaltyFunction1,
    startVal,
    epsilon
  );
  console.log(optimizedVal2, Math.round(penaltyFunction1(optimizedVal2)));
}
export const App: React.FC = () => {
  const [
    chosedFunctionIndex,
    setChosedFunctionIndex,
  ] = React.useState<Number | null>(null);
  const clickBackButton = () => setChosedFunctionIndex(null);
  const clickFunctionOption = (index: Number) => setChosedFunctionIndex(index);
  React.useEffect(() => testOptimization(), []);
  const getPage = () => {
    switch (chosedFunctionIndex) {
      case null:
        return (
          <MainPage
            onClickFunctionOption={clickFunctionOption}
            metadata={metadata}
          />
        );
      default:
        return (
          <MinimizationPage
            chosedFunctionIndex={chosedFunctionIndex}
            onBackToMainPsge={clickBackButton}
          />
        );
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>{getPage()}</div>
    </div>
  );
};
