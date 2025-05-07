const {test,expect}= require('@playwright/test');



test('Browser context playwright test', async ({browser})=>

{
const context= await browser.newContext();
const page = await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

});


test('Error message login', async ({page})=>

    {
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // get-tittle tab assertion 
   console.log (await page.title());
   await expect(page).toHaveTitle("OrangeHRM");

    //css xpath loginng feature
    await page.locator("input[placeholder='Username']").type("Admin");
    await page.locator("//input[@placeholder='Password']").type("yandel");
    await page.locator("button[type='submit']").click();

    //error alert
    console.log(await page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']").textContent());
    await expect(page.locator("//div[@class='oxd-alert-content oxd-alert-content--error']")).toHaveText("Invalid credentials"); 

    });


// npx playwright test tests/OrangeHRM.spec.js --debug  ----- command to run the test in debug mode




test('Successfully login', async ({page})=>

    {
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // get-tittle tab assertion 
   console.log (await page.title());
   await expect(page).toHaveTitle("OrangeHRM");

    //css xpath loginng feature
    await page.locator("input[placeholder='Username']").type("Admin");
    await page.locator("//input[@placeholder='Password']").type("admin123");
    await page.locator("button[type='submit']").click();

    // Check logo
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible();
    });


// npx playwright test tests/OrangeHRM.spec.js --debug  ----- command to run the test in debug mode


test.only('PIM Module', async ({page})=>

    {
   
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   // get-tittle tab assertion 
   console.log (await page.title());
   await expect(page).toHaveTitle("OrangeHRM");

    //css xpath loginng feature
    await page.locator("input[placeholder='username']").type("Admin");
    await page.locator("input[placeholder='password']").type("admin123");
    await page.locator("button[type='submit']").click();

    // Check logo
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible();

    // Click on PIM module
    await page.locator("//span[normalize-space()='PIM']").click();

    // add employee
    await page.locator("//button[normalize-space()='Add']").click();
    await page.locator("//input[@placeholder='First name']").type("Jonathan");
    await page.locator("//input[@placeholder='Middle name']").type("Test");
    await page.locator("//input[@placeholder='Last Name']").type("Test 2");

   //Enable the switch button
    await page.check("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']");

   //
    //await page.locator("button[type='submit']").click();
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").type("jontest1");

   
    });




