//const { test, expect } = require('@playwright/test');
import { test } from "playwright/test";
test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  //await page.waitForTimeout(3000);
  let actualTitle = await page.title();
  console.log(actualTitle);
});
test("Getting the URL current of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  //await page.waitForTimeout(3000);
  let actualUrl = page.url();
  console.log(actualUrl);
});
test("Set the window size", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
  await page.waitForTimeout(3000);
  //await page.setViewportSize({ width: 1024, height: 800 });
  //await page.waitForTimeout(3000);
});
test("", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");
});
