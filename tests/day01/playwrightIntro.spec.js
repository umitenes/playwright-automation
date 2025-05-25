import { test } from '@playwright/test';
//const{test} = require('@playwright/test');

test('Simpl google test', async ({ page }) => {
  await page.goto('https://google.com');
  await page.waitForTimeout(2000);
    
}
);
