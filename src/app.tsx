import * as React from 'react';
import {useRouter, Pages} from './router.hook';
import {MainPage, MinimizationPage} from './pages';
import styles from './app.module.css';
import {functionsToOptimize} from './functions';

export const App: React.FC = () => {
  const [route, setRoute] = useRouter();
  const goToMainPage = () => setRoute({page: Pages.MAIN, params: {}});
  const goToMinimizationPage = (functionId: string) =>
    setRoute({page: Pages.MINIMIZATION, params: {functionId}});
  const getPage = () => {
    switch (route.page) {
      case Pages.MAIN:
        return (
          <MainPage
            onClickFunctionOption={goToMinimizationPage}
            functionsToOptimize={Array.from(functionsToOptimize.values())}
          />
        );
      case Pages.MINIMIZATION:
        if (!functionsToOptimize.has(route.params.functionId)) {
          goToMainPage();
          return null;
        }
        return (
          <MinimizationPage
            //@ts-ignore functionsToOptimize.get can't return undefined
            functionToOptimize={functionsToOptimize.get(
              route.params.functionId
            )}
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
