import{test}from'@playwright/test';

test('context fixtures',async({context})=>{
let page1 = await context.newPage();
await page1.waitForTimeout(1000);
let page2 = await context.newPage();
await page2.waitForTimeout(1000);
let page3 = await context.newPage();
await page3.waitForTimeout(1000);
await page1.bringToFront();
await page1.goto("https://www.perplexity.ai/");
await page2.bringToFront();
await page2.goto('https://wwww.google.com/');
await page3.bringToFront();
await page3.goto('https://www.bing.com/');

});

