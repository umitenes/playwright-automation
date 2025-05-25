import {test} from "@playwright/test";

test.describe('Pratice Cases', () => {
    test.beforeEach(async ({page}) => {
        console.log("Before each test");
        await page.goto('https://practice.cydeo.com/');
    });
    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    });

    test("Title of page", async({page}) => {
      console.log(await page.title());
    
    });
    test("URL of page", async({page}) => {
      console.log(await page.url());
      
    });



});