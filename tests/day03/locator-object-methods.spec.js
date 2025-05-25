import {test} from '@playwright/test';
test.describe("Test Group", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
  test("Check :", async ({ page }) => {
    
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
await page.waitForTimeout(2000);  
let checkbox1 = page.locator("//input[@id='box1']");
await checkbox1.check();
await page.waitForTimeout(2000);

} );
  test("Uncheck:", async ({ page }) => {
     let checkboxesLink = page.getByText("Checkboxes");
     await checkboxesLink.click();
     let checkbox2 = page.locator("//input[@id='box2']");
     await checkbox2.uncheck();
     await page.waitForTimeout(2000);
  });
  test("selectOption", async ({ page }) => {

    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();
    page.waitForTimeout(2000);
    let dropdown = page.locator("//select[@id='dropdown']");
   // await dropdown.selectOption("1");
    await dropdown.selectOption({label: "Option 1" });
    await page.waitForTimeout(2000);
    await dropdown.selectOption({ value: "2" });
    await page.waitForTimeout(2000);
  });
});