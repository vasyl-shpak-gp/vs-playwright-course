import {test, expect } from "@playwright/test";

test.skip('Open new window and navigate back', async ({ context, page })=>{
    await page.goto('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    const pageProsime = context.waitForEvent('page')
    await page.click('#openNewWindow');
    const newPage = await pageProsime;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading', {name: 'Welcome to the New Page'})).toBeVisible();
});

test.skip('Add Cookie', async ({page})=>{
    await page.goto('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',sessionCookie);
    await expect(sessionCookie).toBeDefined();
});

test.skip('Delete cookie', async({page})=>{
    await page.goto('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',sessionCookie);

    await page.click('#deleteCookie');
    const deletedCookies = await page.context().cookies('file:///Users/vshpak/Desktop/vs-playwright-course/tests/workshop_5/index.html');
    const deletedSessionCookie = deletedCookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie',deletedSessionCookie);
    await expect(deletedSessionCookie).toBeUndefined();

})