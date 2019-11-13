import React from 'react';
import {MainPage} from './pages/main-page';
import {MinimizationPage} from './pages/minimization-page';
import './app.css';
import {powellFunction} from './minimization-algorithms/functions';
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
/*function myFn(arr) {
  return (arr[0] - 1) * (arr[0] - 1) + (arr[1] - 1) * (arr[1] - 1) + 5;
}*/
function testOptimization() {
  const epsilon = 0.00001;
  const startVal = new Array(32).fill(20);
  console.log(startVal, powellFunction(startVal));
  const optimizedVal1 = oneStepDifferenceGradientMethod(
    powellFunction,
    startVal,
    epsilon
  );
  console.log(optimizedVal1, Math.round(powellFunction(optimizedVal1)));
  const optimizedVal2 = twoStepDifferenceGradientMethod(
    powellFunction,
    startVal,
    epsilon
  );
  console.log(optimizedVal2, Math.round(powellFunction(optimizedVal2)));
}
export default function App() {
  const [chosedFunctionIndex, setChosedFunctionIndex] = React.useState(null);
  const clickBackButton = () => setChosedFunctionIndex(null);
  const clickFunctionOption = index => setChosedFunctionIndex(index);
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
    <div className="app">
      <div className="app-container">{getPage()}</div>
    </div>
  );
}
