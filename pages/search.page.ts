
import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productHeadings: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.productHeadings = page.getByRole('heading', { level: 5 });
  }

  async open() {
    await this.page.goto('/');
  }

  async searchFor(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async getProductNames(): Promise<string[]> {
    return await this.productHeadings.allTextContents();
  }
}
