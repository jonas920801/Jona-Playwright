const {test,expect}= require('@playwright/test');



test('Browser context playwright test', async ({browser})=>

{
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});


test.only ('Error message login', async ({page})=>

    {
   //const context= await browser.newContext();h
   //const page = await context.newpage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // get-tittle assertion
   console.log (await page.title());
   await expect(page).toHaveTitle("OrangeHRM");
    //css xpath
    await page.locator("input[placeholder='Username']").type("Admin");
    await page.locator("//input[@placeholder='Password']").type("yandel");
    await page.locator("button[type='submit']").click();
    console.log(await page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']").textContent());
    await expect(page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")).toHaveText("Invalid credentials"); 

    });


