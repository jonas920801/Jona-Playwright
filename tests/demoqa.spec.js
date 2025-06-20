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



test('Element Text box ', async ({page})=>

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




test('Element Check box ', async ({page})=>

            {
           
            await page.goto("https://demoqa.com/");
        
           // get-tittle tab assertion 
           console.log (await page.title());
           await expect(page).toHaveTitle("DEMOQA");

           await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
           await page.locator("div[class='element-list collapse show'] li[id='item-1'] span[class='text']").click();
          // await page.locator("//button[@title='Toggle']//*[name()='svg']").click();


             // Click the expand all button (optional, if needed)
           await page.click('.rct-option-expand-all');

            // Click the "Home" label to toggle the checkbox
           await page.click('label[for="tree-node-home"]');

           // Verify that it's selected
           const isChecked = await page.locator('#tree-node-home').isChecked();
           console.log('Is Home checked?', isChecked);

                  // Click the "Desktop" label to toggle the checkbox
           if (!isChecked) {
                console.log('The checkbox is NOT checked.');
                // You can also click to check it if needed
                await page.locator('label[for="tree-node-home"]').click();
              }

           

            });


test('Radio button ', async ({page})=>

              {
             
              await page.goto("https://demoqa.com/");
          
             // get-tittle tab assertion 
             console.log (await page.title());
             await expect(page).toHaveTitle("DEMOQA");
             await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
             await page.locator("//span[normalize-space()='Radio Button']").click();


            // Click the "Impressive" radio button using the label text
            await page.locator("//label[@for='impressiveRadio']").click();


            // Optional: verify that it was selected
            const isChecked = await page.locator('input#impressiveRadio').isChecked();
            console.log('Is "Impressive" selected?', isChecked); // should be true
            

          
          });

test('form and send ', async ({page})=>

            {
           
            await page.goto("https://demoqa.com/");
        
           // get-tittle tab assertion 
           console.log (await page.title());
           await expect(page).toHaveTitle("DEMOQA");
           await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
           await page.locator("//span[normalize-space()='Radio Button']").click();


          // Click the "Impressive" radio button using the label text
          await page.locator("//label[@for='impressiveRadio']").click();


          // Optional: verify that it was selected
          const isChecked = await page.locator('input#impressiveRadio').isChecked();
          console.log('Is "Impressive" selected?', isChecked); // should be true
          

        
        });



test.only('Web Tables ', async ({page})=>

          {
         
          await page.goto("https://demoqa.com/");
      
         // get-tittle tab assertion 
         console.log (await page.title());
         await expect(page).toHaveTitle("DEMOQA");
         await page.locator("//div[@class='category-cards']//div[1]//div[1]//div[2]//*[name()='svg']").click();
         await page.locator("div[class='element-list collapse show'] li[id='item-3'] span[class='text']").click();
         await page.locator("#addNewRecordButton").click();

    
        // Fill out the registration form
        await page.locator("//input[@id='firstName']").type("Jonathan");
        await page.locator("//input[@id='lastName']").type("Vela");
        await page.locator("//input[@id='userEmail']").type("emailtestjonathan@gmail.com");
        await page.locator("//input[@id='age']").type("99");
        await page.locator("//input[@id='salary']").type("30000000");
        await page.locator("//input[@id='department']").type("Kelowna");
        await page.locator("//button[@id='submit']").click();

        
       //Verify that the new record was added 
        await page.locator("//input[@id='searchBox']").type("Jonathan");
        const newRecord = await page.locator("//div[@class='rt-tbody']//div[contains(text(), 'Jonathan')]").isVisible();
        console.log('Is the new record visible?', newRecord); // should be true
        expect(newRecord).toBeTruthy();

      });




    //npx playwright codegen http://google.com  run this command in terminal to generate code for the test