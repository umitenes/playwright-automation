import{test}from'@playwright/test';

test('SEP Succssful Checkout', async ({ page }) => {
    // Go to the SeEP login page
    let encodedCredentials = Buffer.from("automation-user:123abc").toString("base64");
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredentials}` });
    await page.goto('https://qa.sep.tdtm.cydeo.com/taws');
    
    

    await page.waitForTimeout(2000);
    
    //step 2 :Payment plans

    });
