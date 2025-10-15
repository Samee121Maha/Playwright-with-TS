
import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private postalCodeInput = '[data-test="postalCode"]';
  private continueBtn = 'input[type="submit"][value="Continue"]';
  private finishBtn = this.page.getByRole('button', { name: 'Finish' });

  private completeHeader = '.complete-header';

  constructor(private page: Page) {}

  async enterCheckoutInfo(first: string, last: string, postal: string) {
    await this.page.fill(this.firstNameInput, first);
    await this.page.fill(this.lastNameInput, last);
    await this.page.fill(this.postalCodeInput, postal);
  }

  async continueToOverview() {
    console.log('Current URL:', await this.page.url());
    const continueBtn = this.page.locator('.btn_primary.cart_button');
  await continueBtn.waitFor({ state: 'visible', timeout: 10000 });
await continueBtn.evaluate((el) => (el as HTMLElement).click());
    await this.page.waitForURL(/checkout-step-two/);
  }

  async finishCheckout() {
    const finishBtn = this.page.locator('.btn_action.cart_button');
  await finishBtn.waitFor({ state: 'visible', timeout: 10000 });
  await finishBtn.evaluate((el) => (el as HTMLElement).click());
  await this.page.waitForURL(/checkout-complete/);
  }

  async verifyOrderComplete() {
    await expect(this.page.locator(this.completeHeader)).toBeVisible({ timeout: 10000 });
  }
}
