import * as React from 'react';
import {useRouter, Pages} from './router.hook';
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
  const [route, setRoute] = useRouter();
  const goToMainPage = () => setRoute({page: Pages.MAIN, params: {}});
  const goToMinimizationPage = (functionId: Number) =>
    setRoute({page: Pages.MINIMIZATION, params: {functionId}});
  React.useEffect(() => testOptimization(), []);
  const getPage = () => {
    switch (route.page) {
      case Pages.MAIN:
        return (
          <MainPage
            onClickFunctionOption={goToMinimizationPage}
            metadata={metadata}
          />
        );
      case Pages.MINIMIZATION:
        return (
          <MinimizationPage
            chosedFunctionIndex={route.params.functionId}
            onBackToMainPsge={goToMainPage}
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
