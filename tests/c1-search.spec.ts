import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search.page';

test('C1 Search by name', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.open();
  await searchPage.searchFor('pliers');

  await expect.poll(async () => {
    const names = await searchPage.getProductNames();

    return names.length > 0 &&
      names.every(name => /pliers/i.test(name.trim()));
  }).toBe(true);

  const productNames = await searchPage.getProductNames();

  for (const name of productNames) {
    expect(name.trim().toLowerCase()).toContain('pliers');
  }
});