import { test } from '@playwright/test';


test('First playwright test', async ({browser}) => 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('localhost:3000');
});

test('Second playwright test', async ({page}) => 
{
    await page.goto("https://www.google.com");
});