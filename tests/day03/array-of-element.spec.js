//create test group from playwright including 3 test and page fixture

import { test, expect } from '@playwright/test';
test.describe('Array of elements', () => {
    let elements;

    test.beforeEach(async ({ page }) => {
       
        await page.goto("https://practice.cydeo.com/");
       elements=await page.locator("//ul[@class='list-group']//a").all();
          
    });
    test("50 link elements in the <ul> tag", async ({ page }) => {
        
        expect(elements.length).toBe(50);
        expect(elements.length).toBeGreaterThan(20);
    });
    test("50 link elements in the <ul> tag is visible , clickable", async ({ page }) => {
      
        for (let i = 0; i < elements.length; i++) {
            expect(await elements[i].isVisible()).toBeTruthy();
            expect(await elements[i].isEnabled()).toBeTruthy();
        }
        //---------------------------
        for(let e of elements){
            await expect(e).toBeVisible();
            await expect(e).toBeEnabled();
        }
        
    });
    test("50 link elements in the <ul> tag has a href attribute", async ({ page }) => {
      
        for(let e of elements){
            await expect(e).toHaveAttribute("href");
            console.log(await e.getAttribute("href"));
        }
        
    });
});