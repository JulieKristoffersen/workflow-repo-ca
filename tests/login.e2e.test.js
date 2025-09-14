import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const LOGIN_URL = `${process.env.BASE_URL}/login`;
const HOME_URL = `${process.env.BASE_URL}/`;

test.describe("Login flow", () => {

  test("User can successfully log in with valid credentials", async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
    await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL(HOME_URL, { timeout: 5000 });
    expect(page.url()).toBe(HOME_URL);
  });

  test("User sees an error message with invalid credentials", async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.fill('input[name="email"]', "wrong@example.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    const errorMessage = page.locator("#message-container div");
    await expect(errorMessage).toHaveText(/login failed|sorry, sign up failed/i, { timeout: 5000 });
  });

});
