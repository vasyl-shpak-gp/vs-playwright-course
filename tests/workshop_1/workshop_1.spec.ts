import {test} from 'playwright/test';

test('Basic Navigation', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

test('Interacting with Web Element on Gitlab', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');
    await page.locator('#be-navigation-mobile').getByRole('link', {name: 'Get free trial'}).click();
    // await page.locator('[data-testid="new-user-first-name-field"]').fill('John1');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Snow1');
    await page.getByTestId('new-user-first-name-field').fill('John1');
    await page.getByTestId('new-user-last-name-field').fill('Snow');
})

test('Using Various Locator Methods', async ({page})=>{
    await page.goto('https://gitlab.com/');
    await page.click('#onetrust-accept-btn-handler');//cookie btn click
    await page.getByRole('button', {name: 'Main menu'}).click()
    await page.getByRole('link', {name: 'Sign in '}).click()
})

test('Locator Methods', async ({page})=>{
    //locator
    const submitButton = await page.locator('[role="input"]')
    await submitButton.fill('value')

    //getByText
    const learnMoreLink = await page.getByText('a:has-text("Learn More")');

    //getByTitle
    const title = await page.getByTitle('[title="mr"]')
})





