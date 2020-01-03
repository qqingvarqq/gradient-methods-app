/*global page */

describe('navigation between pages', () => {
  test('MainPage: click on the card should redirect to the optimization page with the corresponding function', async () => {
    await page.goto('http://localhost:3030/#/');
    //used for dixon-price function card
    const firstCardElementSelector =
      'div[class^=main-page_options_container]>div[title="Dixon-Price function"]';
    await page.waitForSelector(firstCardElementSelector);
    await page.click(firstCardElementSelector);
    const optimizationPageSelector = 'div[class^=optimization-page_root]';
    const isFound = await page.waitForSelector(optimizationPageSelector);
    expect(isFound).not.toBeNull();
    //url should also change
    const url = await page.url();
    expect(url.indexOf('optimize/dixonPriceFunction')).not.toEqual(-1);
  });
  test('OptimizationPage: clicking back button should redirect to the main page', async () => {
    //used for page with extended Powell Function
    await page.goto('http://localhost:3030/#/optimize/extendedPowellFunction');
    const buttonSelector = 'button';
    await page.waitForSelector(buttonSelector);
    let goBackButtonElement = null;
    const buttons = Array.from(await page.$$(buttonSelector));
    for (let button of buttons) {
      let text = await page.evaluate(button => button.textContent, button);
      if (text === '←') {
        goBackButtonElement = button;
        break;
      }
    }
    await goBackButtonElement.click();
    const mainPageSelector = 'div[class^=main-page_root]';
    const isFound = await page.waitForSelector(mainPageSelector);
    expect(isFound).not.toEqual(null);
    //url should also change
    const url = await page.url();
    expect(url.split('#').pop()).toEqual('/');
  });
});
