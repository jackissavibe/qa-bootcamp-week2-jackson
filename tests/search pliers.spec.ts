
import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search.page';

test('Search - Verify only pliers products are displayed', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.open();
  await searchPage.searchFor('pliers');

  await expect(searchPage.productHeadings).toHaveCount(4);

  const productNames = await searchPage.getProductNames();

  for (const name of productNames) {
    expect(name.toLowerCase()).toContain('pliers');
  }
});
