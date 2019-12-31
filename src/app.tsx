import * as React from 'react';
import {useRouter, Pages} from './router.hook';
import {MainPage, OptimizationPage} from './pages';
import styles from './app.module.css';
import {functionsToOptimize} from './functions';

export const App: React.FC = () => {
  const [route, setRoute] = useRouter();
  const goToMainPage = () => setRoute({page: Pages.MAIN, params: {}});
  const goToOptimizationPage = (functionId: string) =>
    setRoute({page: Pages.OPTIMIZATION, params: {functionId}});
  const getPage = () => {
    switch (route.page) {
      case Pages.MAIN:
        return (
          <MainPage
            onClickFunctionOption={goToOptimizationPage}
            functionsToOptimize={Array.from(functionsToOptimize.values())}
          />
        );
      case Pages.OPTIMIZATION:
        if (!functionsToOptimize.has(route.params.functionId)) {
          goToMainPage();
          return null;
        }
        return (
          <OptimizationPage
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
