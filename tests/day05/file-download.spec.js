import{test, expect}from'@playwright/test';
import path from 'path';
import fs from 'fs';
test(('File download'),async({page})=>{
    let promisedDownloadEvent=page.waitForEvent("download");
    await page.goto("https://practice.cydeo.com/download");
    await page.click("text='image.png'");
    
    let download=await promisedDownloadEvent;
    
    let downloadPath =path.join(__dirname, "./downloads", download.suggestedFilename());
    await download.saveAs(downloadPath);
    expect(fs.existsSync(downloadPath)).toBeTruthy();

});
test("File upload", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/upload");
  let filePath = path.join(__dirname, "./uploads", "testupload.txt");
  await page.waitForTimeout(2000); // Wait for the page to load completely
await page.setInputFiles("//input[@id='file-upload']", filePath);
await page.click("//input[@id='file-submit']");
await page.waitForTimeout(2000); // Wait for the upload to complete

  await expect(page.getByText("File Uploaded!")).toBeVisible
});