import { test } from '@playwright/test';
test.describe('Test group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
  test('innerText();', async ({page}) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");
    let actualText=await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue():only <input>,<textarea>,<select> tag", async ({page}) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();
    await page.waitForTimeout(2000);
    let inputBox=page.locator("//input[@type='number']");
    await inputBox.fill("100");
    await page.waitForTimeout(2000);
    let actualValue = await inputBox.inputValue();
    console.log(actualValue);
  });

  test('getAttribute():', async ({page}) => {
    let abTestingLink = page.getByText("A/B Testing");
    let hrefLink=await abTestingLink.getAttribute("href");
    console.log(hrefLink);
  });
});