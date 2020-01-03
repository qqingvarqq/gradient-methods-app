/*global page */

describe('optimization page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3030/#/optimize/sumSquaresFunction');
  });
  test('interaction', async () => {
    const mainPageSelector = 'div[class^=optimization-page]';
    await page.waitForSelector(mainPageSelector);
    //go to vectorX input
    const vectorXInputSelector = 'div[class^=function-info_vector_x]>input';
    //clear standard value
    await page.click(vectorXInputSelector, {clickCount: 3});
    await page.keyboard.press('Backspace');
    //input new value for vectorX
    await page.keyboard.press('Digit1');
    //go to epsilon input
    const epsilonInputSelector = 'div[class^=function-info_epsilon]>input';
    //clear epsilon standard value
    await page.click(epsilonInputSelector, {clickCount: 3});
    await page.keyboard.press('Backspace');
    //input new value for epsilon
    const epsilonVal = ['Digit0', 'Period', 'Digit0', 'Digit1'];
    for (let i = 0; i < epsilonVal.length; i++) {
      await page.keyboard.press(epsilonVal[i]);
    }
    const optimizeButtonSelector = 'div[class^=function-info_optimize]>button';
    //click on optimization button
    await page.click(optimizeButtonSelector);
    //wait for all aoptimization
    const optimizationCardSelector = 'div[class^=card_root]';
    const optimizationResultSelector =
      'div[class^=card_root]>div[class^=optimization-result_root]';
    await page.waitFor(
      ({optimizationCardSelector, optimizationResultSelector}) => {
        const countOfCardOnPage = document.querySelectorAll(
          optimizationCardSelector
        ).length;
        const countOfOptimizationOutputCard = document.querySelectorAll(
          optimizationResultSelector
        ).length;
        return (
          countOfOptimizationOutputCard >= 1 &&
          countOfCardOnPage - 1 === countOfOptimizationOutputCard
        ); //-1: because we don't count functionInfo Card
      },
      {},
      {optimizationCardSelector, optimizationResultSelector}
    );
  });
});
