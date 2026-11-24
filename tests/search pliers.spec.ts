
import { test, expect } from '@playwright/test';

test('Search - Verify only pliers products are displayed', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');

  await page.getByRole('button', { name: 'Search' }).click();

  const products = page.getByRole('heading', { level: 5 });

  await expect(products).toHaveCount(4);

  const names = await products.allTextContents();

  for (const name of names) {
    expect(name.toLowerCase()).toContain('pliers');
  }
});
