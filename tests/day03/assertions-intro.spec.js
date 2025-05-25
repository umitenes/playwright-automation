//create test group from playwright including 3 test and page fixture
import { test, expect } from '@playwright/test';
test.describe('Assertions Intro', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        await expect(page).toHaveTitle("Practice");
        expect(await page.title()).toBe("Practice");    
    });

    test('Verify checkboxes are checked!', async ({ page }) => {
      await page.getByText('Checkboxes').click();
        let checkbox1 = page.locator("input#box1");
        let checkbox2 = page.locator("input#box2");
       await checkbox1.check();
        await checkbox2.check();
        await expect(checkbox1).toBeChecked();
        await expect(checkbox2).toBeChecked();
        console.log("------------------------------------------");
        expect(await checkbox1.isChecked() ).toBeTruthy();
        expect(await checkbox2.isChecked() ).toBeTruthy();

    });
    
    test("Verify checkboxes are unchecked!", async ({ page }) => {
  await page.getByText("Checkboxes").click();
  let checkbox1 = page.locator("input#box1");
  let checkbox2 = page.locator("input#box2");
    await checkbox1.uncheck();
    await checkbox2.uncheck();
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    console.log("------------------------------------------");
    expect(await checkbox1.isChecked()).toBeFalsy();
    expect(await checkbox2.isChecked()).toBeFalsy();
    });
    
    test('Verify text of the element', async ({ page }) => {
       let headerElemnt=page.locator("span.h1y");
       await expect(headerElemnt).toHaveText("Test Automation Practice");

       let  actualText=await headerElemnt.innerText();
       expect(actualText).toEqual("Test Automation Practice");
       console.log("------------------------------------------");
    });
});
//test group with 3 tests