import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const LOGIN_URL = `${process.env.BASE_URL}/login`;
const HOME_URL = `${process.env.BASE_URL}/`;
const VALID_EMAIL = process.env.TEST_USER_EMAIL;
const VALID_PASSWORD = process.env.TEST_USER_PASSWORD;

async function fillLoginForm(page, email, password) {
  await page.goto(LOGIN_URL);
  await page.waitForSelector("#loginForm");

  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);

  await page.getByRole("button", { name: "Login" }).click();
}

test.describe("Login flow", () => {

  test("User can successfully log in with valid credentials", async ({ page }) => {
    await fillLoginForm(page, VALID_EMAIL, VALID_PASSWORD);

    const logoutButton = page.getByRole("button", { name: "Logout" });
    await expect(logoutButton).toBeVisible({ timeout: 5000 });

    expect(page.url()).toBe(HOME_URL);
  });

  test("User sees an error message with invalid credentials", async ({ page }) => {
    await fillLoginForm(page, VALID_EMAIL, "wrongpassword");

    const messageContainer = page.locator("#message-container");
    await expect(messageContainer).toContainText(
      /invalid|failed/i, 
      { timeout: 5000 }
    );
  });

});
