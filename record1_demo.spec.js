import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=sacedemo&oq=sacedemo&aqs=chrome..69i57.5187j0j2&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Swag Labs Sauce Demo https://www.saucedemo.com › ...' }).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGINqq' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});