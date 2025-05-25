import{test}from'@playwright/test';
test("Confirm Alert", async ({ page }) => {
    await page.goto("https://google.com");
  page.on("dialog", async (alert) => {
    console.log(`Alert message :${alert.message()}`);
    await alert.dismiss();
  });
  let clickForJSConfirmButton = page.locator(
    "//div[@class='QS5gu sy4vM' and text()='Acceptă tot']"
  );
  await clickForJSConfirmButton.click();
  let inputBox = page.locator("//textarea[@id='APjFqb']");
  await inputBox.fill("ICHC");
  await inputBox.press("Enter");
    await page.waitForTimeout(3000);
});