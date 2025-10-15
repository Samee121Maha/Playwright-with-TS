// utils/basePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click(target: string | Locator) {
    const element = typeof target === 'string' ? this.page.locator(target) : target;
    await element.waitFor({ state: 'visible', timeout: 20000 });
    await element.click();
  }

  async type(target: string | Locator, value: string) {
    const element = typeof target === 'string' ? this.page.locator(target) : target;
    await element.waitFor({ state: 'visible', timeout: 20000 });
    await element.fill(value);
  }

  async verifyVisible(target: string | Locator) {
    const element = typeof target === 'string' ? this.page.locator(target) : target;
    await expect(element).toBeVisible({ timeout: 15000 });
  }
}
