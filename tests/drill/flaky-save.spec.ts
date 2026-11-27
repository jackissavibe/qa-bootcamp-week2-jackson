import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'url';
import path from 'path';

test('Flaky drill - Save message', async ({ page }) => {
  const filePath = path.join(__dirname, 'index.html');

  await page.goto(pathToFileURL(filePath).href);

  const status = page.locator('#status');

  await page.locator('#save').click();

  await expect(status).toHaveText('Saved');
});