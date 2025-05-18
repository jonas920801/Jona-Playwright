const {test,expect}= require('@playwright/test');



test('Browser context playwright test', async ({browser})=>

{
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://demoqa.com/');

});


test('Go to Demoqa Successfuly', async ({page})=>

    {
   
    await page.goto("https://demoqa.com/");

   // get-tittle tab assertion 
   console.log (await page.title());
   await expect(page).toHaveTitle("DEMOQA");

    });



test.only('Element Text box ', async ({page})=>

        {
       
        await page.goto("https://demoqa.com/");
    
       // get-tittle tab assertion 
       console.log (await page.title());
       await expect(page).toHaveTitle("DEMOQA");

       await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
       await page.locator("//span[normalize-space()='Text Box']").click();
       await page.locator("//input[@id='userName']").type("Jonathan");
       await page.locator("//input[@id='userEmail']").type("jonas123@gmail.com");
       await page.locator("//textarea[@id='currentAddress']").type("1234 Main St");
       await page.locator("//textarea[@id='permanentAddress']").type("768 Brooklyn St");
       await page.locator(" //button[@id='submit']").click();
        });






    //npx playwright codegen http://google.com  run this command in terminal to generate code for the test