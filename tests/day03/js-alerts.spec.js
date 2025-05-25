import{test}from'@playwright/test';

test.describe('JavaScript Alerts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/javascript_alerts');
    });
    
    test('Regular Alert', async ({ page }) => {
        page.on('dialog', async (alert) => {
            console.log(`Alert message :${alert.message()}`);
            await page.waitForTimeout(2000);
            await alert.accept();
        });
        let clickForJSAlertButton = page.locator('button[onclick="jsAlert()"]');
        await clickForJSAlertButton.click();
        await page.waitForTimeout(2000);
    });
    test('Confirm Alert', async ({ page }) => {
        page.on('dialog', async (alert) => {
            console.log(`Alert message :${alert.message()}`);
            await page.waitForTimeout(2000);
            await alert.dismiss();
        });
        let clickForJSConfirmButton = page.locator("//button[@onclick='jsConfirm()']");
        await clickForJSConfirmButton.click();
        await page.waitForTimeout(2000);
    });
    test('Prompt Alert', async ({ page }) => {
        page.on('dialog', async (alert) => {
            console.log(`Alert message :${alert.message()}`);
            await page.waitForTimeout(2000);
            await alert.accept('Hello World');
        });
        
         let clickForJSPromtButton = page.locator("//button[@onclick='jsPrompt()']");
        await clickForJSPromtButton.click();
         await page.waitForTimeout(2000);
        
    });
});