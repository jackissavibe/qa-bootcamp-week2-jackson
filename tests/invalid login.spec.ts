import { test, expect } from '@playwright/test';

test('invalid login displays an error message', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  await page.locator('[data-test="email"]').fill('test@example.com');

  await page.locator('[data-test="password"]').fill('Password123!');

  await page.locator('[data-test="login-submit"]').click();

  await expect(page.getByText('Invalid email or password')).toBeVisible();
});