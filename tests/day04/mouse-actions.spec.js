import{test,expect}from'@playwright/test';

test.describe('Mouse actions', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });
    test("Left Click", async ({ page }) => {
      await page.click("text='A/B Testing'");
    });
    test("Mouse right click test", async ({ page }) => {
        await page.click("text='A/B Testing'", { button: 'right' });
    });
    test('Mouse hover test', async ({ page }) => {
        await page.click("text='Hovers'");
        //await page.waitForTimeout(3000);
        //await page.hover("//img[@src='/img/avatar-blank.jpg']");

        let elements = await page.locator("//img[@alt='User Avatar']").all();
        for(let each of elements){
            await page.waitForTimeout(3000);
            await each.hover();
        }
    });
    test("Mouse scroll test", async ({ page }) => {
     await page.mouse.wheel(0, 2000);
    });
    test("Scrolling specific element", async ({ page }) => {
      let inputsLink=page.getByText("Inputs");
      await inputsLink.scrollIntoViewIfNeeded();
      await inputsLink.click();

    });
    test("Mouse drag and drop test", async ({ page }) => {
      await page.click("text='Drag and Drop'");
      //await page.waitForTimeout(3000);
      //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");

      let columnA= page.locator("//div[@id='column-a']");
      let columnB= page.locator("//div[@id='column-b']");
        await columnA.dragTo(columnB);
    });
    
});