

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

    



test('sort elements by price: High to low', async ({page})=>

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
            // sort elements

            const dropdown = page.locator(".product_sort_container");
            await dropdown.selectOption("Price (high to low)");
            await page.pause();
        
        });
               
        


test.only('Cancel check out and delete Items', async ({page})=>

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
    
           // add Items to cart
            await page.locator("#add-to-cart-sauce-labs-backpack").click();
            await page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();
            await page.locator(".shopping_cart_link").click();
            await page.locator("#checkout").click();
            await page.locator("#cancel").click();
            await page.locator("#continue-shopping").click();
            await page.locator("#remove-sauce-labs-backpack").click();
            await page.locator("button[id='remove-test.allthethings()-t-shirt-(red)']").click();
            await page.locator(".shopping_cart_link").click();
            console.log(await page.locator("//button[@id='continue-shopping']").textContent());
            await expect(page.locator("//button[@id='continue-shopping']")).toHaveText("Continue Shopping"); 
           
            });