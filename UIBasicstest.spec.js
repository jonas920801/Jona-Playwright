

const {test,expect}= require('@playwright/test');



test ('Browser context playwright test', async ({browser})=>

{
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.eltiempo.com');

});


test ('Error message test', async ({page})=>

    {
   //const context= await browser.newContext();h
   //const page = await context.newpage();
    await page.goto("https://www.saucedemo.com");

   // get-tittle assertion
   console.log (await page.title());
   await expect(page).toHaveTitle("Swag Labs");
    //css xpath
    await page.locator("#user-name").type("standard_user");
    await page.locator("#password").type("wisin");
    await page.locator("#login-button").click();
    console.log(await page.locator("h3[data-test='error']").textContent());
    await expect(page.locator("h3[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service"); 

    });


test('Sucesfull login', async ({page})=>

        {
       //const context= await browser.newContext();h
       //const page = await context.newpage();
        const cardTitles = page.locator(".inventory_item_name");
        await page.goto("https://www.saucedemo.com");
    
       // get-tittle assertion
       console.log (await page.title());
       await expect(page).toHaveTitle("Swag Labs");
        //css xpath
        await page.locator("#user-name").type("standard_user");
        await page.locator("#password").type("secret_sauce");
        await page.locator("#login-button").click();
        console.log(await page.locator("//div[@class='app_logo']").textContent());
        await expect(page.locator("//div[@class='app_logo']")).toHaveText("Swag Labs"); 

       // const allTitle = await cardTitles.allTextcontent();
        console.log(await cardTitles.first().textContent());
        console.log(await cardTitles.nth(1).textContent());
        const allTitle = await cardTitles.allTextContents();
        console.log(allTitle);
        });

    



test.only('end to end', async ({page})=>

            {
           //const context= await browser.newContext();h
           //const page = await context.newpage();
            const cardTitles = page.locator(".inventory_item_name");
            await page.goto("https://www.saucedemo.com");
        
           // get-tittle assertion
           console.log (await page.title());
           await expect(page).toHaveTitle("Swag Labs");
            //css xpath
            await page.locator("#user-name").type("standard_user");
            await page.locator("#password").type("secret_sauce");
            await page.locator("#login-button").click();
            console.log(await page.locator("//div[@class='app_logo']").textContent());
            await expect(page.locator("//div[@class='app_logo']")).toHaveText("Swag Labs"); 
            // add to cart
            await page.locator("(//button[@id='add-to-cart-sauce-labs-backpack'])[1]").click();
            await page.locator("//a[@class='shopping_cart_link']").click();
            console.log(await page.locator("//div[@class='inventory_item_name']").textContent());
            await expect(page.locator("//div[@class='inventory_item_name']")).toHaveText("Sauce Labs Backpack"); 
            // checkout
            await page.locator("//button[@id='checkout']").click();
            console.log(await page.locator("//span[@class='title']").textContent());
            await expect(page.locator("//span[@class='title']")).toHaveText("Checkout: Your Information"); 
            
            // fill form
            await page.locator("//input[@id='first-name']").type("Jonathan");
            await page.locator("//input[@id='last-name']").type("Vela");
            await page.locator("//input[@id='postal-code']").type("111031");
            await page.locator("//input[@id='continue']").click();
            console.log(await page.locator("//span[@class='title']").textContent());
            await expect(page.locator("//span[@class='title']")).toHaveText("Checkout: Overview"); 
            // finish button
            await page.locator("//button[@id='finish']").click();

            console.log(await page.locator("//span[@class='title']").textContent());
            await expect(page.locator("//span[@class='title']")).toHaveText("Checkout: Complete!"); 
            console.log(await page.locator("//h2[normalize-space()='Thank you for your order!']").textContent());
            await expect(page.locator("//h2[normalize-space()='Thank you for your order!']")).toHaveText("Thank you for your order!"); 

            });
    
        