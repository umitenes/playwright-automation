import{test}from '@playwright/test';
test('Locators intro', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(5000);
    
    let searchBox=page.locator("//textarea[@id='APjFqb']");
    await searchBox.type('Cydeo');
    //await page.fill('Cydeo');
    await page.waitForTimeout(3000);
    searchBox.press('Enter');
    await page.waitForTimeout(5000);

}
);
/*
<textarea class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" aria-autocomplete="both" 
aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" 
autocorrect="off" id="APjFqb" maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" jsaction="paste:puy29d" data-ved="0ahUKEwi3pdD0kJeNAxV4FBAIHfapGewQ39UDCAM"></textarea>
*/

//textarea[@class='gLFyf']