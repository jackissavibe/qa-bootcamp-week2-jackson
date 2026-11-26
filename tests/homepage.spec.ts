import { test, expect } from '@playwright/test';

test('Homepage - Verify page title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});