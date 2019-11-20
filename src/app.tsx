import * as React from 'react';
import {useRouter, Pages} from './router.hook';
import {MainPage, MinimizationPage} from './pages';
import styles from './app.module.css';
import {FunctionsToOptimize} from './functions';

export const App: React.FC = () => {
  const [route, setRoute] = useRouter();
  const goToMainPage = () => setRoute({page: Pages.MAIN, params: {}});
  const goToMinimizationPage = (functionId: Number) =>
    setRoute({page: Pages.MINIMIZATION, params: {functionId}});
  const getPage = () => {
    switch (route.page) {
      case Pages.MAIN:
        return (
          <MainPage
            onClickFunctionOption={goToMinimizationPage}
            functionsToOptimize={FunctionsToOptimize}
          />
        );
      case Pages.MINIMIZATION:
        if (route.params.functionId >= FunctionsToOptimize.length) {
          goToMainPage();
          return null;
        }
        return (
          <MinimizationPage
            functionToOptimize={FunctionsToOptimize[route.params.functionId]}
            onClickGoBackMainPage={goToMainPage}
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
