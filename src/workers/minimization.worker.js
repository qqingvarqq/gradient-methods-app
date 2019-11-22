import {optimizationMethods, runOptimization} from '../minimization-algorithms';
import {functionsToOptimize} from '../functions';
import {MinimizationWorkerMessageTypes} from './worker-messages';

const onOptimizeFunction = params => {
  if (params === undefined || !Array.isArray(params) || params.length === 0) {
    return;
  }
  const messageType = params.shift();
  if (messageType !== MinimizationWorkerMessageTypes.OPTIMIZE_FUNCTION) {
    return;
  }
  const [vectorX, epsilon, functionId, optimizationMethodId] = params;
  const optimizationResult = runOptimization(
    optimizationMethods.get(optimizationMethodId).method,
    functionsToOptimize.get(functionId).functionToCall,
    vectorX,
    epsilon
  );
  // eslint-disable-next-line no-restricted-globals
  self.postMessage([
    MinimizationWorkerMessageTypes.RSULT_OF_OPTIMIZATION,
    optimizationResult,
  ]);
};
// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', event => {
  const data = event.data;
  onOptimizeFunction(data);
});
