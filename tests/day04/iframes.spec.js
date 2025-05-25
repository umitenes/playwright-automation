import{test,expect}from'@playwright/test';

test('ifraame test', async ({ page }) => {
    // Go to the website
    await page.goto("https://practice.cydeo.com/iframe");
    let myFrame=page.frameLocator("//iframe[@id='mce_0_ifr']");
let elementinsideTheFrame = myFrame.locator("//body[@id='tinymce']");
await page.waitForTimeout(3000);
await elementinsideTheFrame.clear();
//await elementinsideTheFrame.press("Control+A","delete");

await elementinsideTheFrame.fill("Hello World");
await page.waitForTimeout(3000);

await expect(elementinsideTheFrame).toHaveText("Hello World");
await page.pause();

}); 