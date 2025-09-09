import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
  test('User can successfully log in with valid credentials', async ({ page }) => {
    await page.goto('/login.html');

    await page.fill('input[name="email"]', process.env.VALID_EMAIL);
    await page.fill('input[name="password"]', process.env.VALID_PASSWORD);
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/.*profile\.html/);
    await expect(page.locator('body')).toContainText('Welcome');
  });

  test('User sees an error message with invalid credentials', async ({ page }) => {
    await page.goto('/login.html');

    await page.fill('input[name="email"]', 'wrong@stud.noroff.no');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error')).toContainText('Invalid');
  });
  test('check env is loaded', async () => {
  console.log('VALID_EMAIL from env:', process.env.VALID_EMAIL);
  expect(process.env.VALID_EMAIL).toBeDefined();
});

});

