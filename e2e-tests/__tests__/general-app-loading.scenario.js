/*global page */

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3030/#/');
  });
  it('should have title', async () => {
    const title = await page.title();
    await expect(title).toEqual('Gradient Methods');
  });
  it('should have favicon.ico', async () => {
    const iconUrl = await page.$eval("link[rel*='icon']", ({href}) => href);
    expect(iconUrl.split('/').pop()).toEqual('favicon.ico');
    const isOk = await page.evaluate(async iconUrl => {
      const {ok} = await fetch(iconUrl);
      return ok;
    }, iconUrl);
    expect(isOk).toBeTruthy();
  });
});
