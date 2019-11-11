import React from 'react';
import {MainPage} from './pages/main-page';
import {MinimizationPage} from './pages/minimization-page';
import './app.css';

const metadata = [
  {name: 'penalty-function-1', description: 'Penalty Function 1'},
  {name: 'penalty-function-2', description: 'Penalty Function 2'},
  {name: 'rosenbrock-function', description: 'Rosenbrock Function'},
  {name: 'powell-function', description: 'Powell Function'},
];

export default function App() {
  const [chosedFunctionIndex, setChosedFunctionIndex] = React.useState(null);
  const clickBackButton = () => setChosedFunctionIndex(null);
  const clickFunctionOption = index => setChosedFunctionIndex(index);
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
