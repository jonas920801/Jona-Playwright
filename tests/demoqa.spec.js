const {test,expect}= require('@playwright/test');



test('Browser context playwright test', async ({browser})=>

{
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://demoqa.com/');

});


test.only('Go to Demoqa Successfuly', async ({page})=>

    {
   
    await page.goto("https://demoqa.com/");

   // get-tittle tab assertion 
   console.log (await page.title());
   await expect(page).toHaveTitle("DEMOQA");


    });