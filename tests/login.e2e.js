/* eslint-env node */
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = 'http://localhost:3000'; 

test.describe('Login', () => {

  test('User can log in with valid credentials', async ({ page }) => {
    await page.goto(`${baseURL}/login`);

    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Profile')).toBeVisible();
  });

  test('User sees an error with invalid credentials', async ({ page }) => {
    await page.goto(`${baseURL}/login`);

    await page.fill('input[name="email"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
  });

});
