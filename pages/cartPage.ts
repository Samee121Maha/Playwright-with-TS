
import { Page, expect } from '@playwright/test';

export default class CartPage {
  private cartItems = '.cart_item';
  private checkoutBtn = '#checkout'; 

  constructor(private page: Page) {}

  async verifyCartPage() {
    await expect(this.page.locator(this.cartItems)).toBeVisible({ timeout: 10000 });
   
  }

  async proceedToCheckout() {
    await this.page.waitForURL(/.*cart.html/);
    console.log('Current URL:', await this.page.url());
    const count = await this.page.locator('#checkout').count();
    console.log(`Checkout button count: ${count}`);
    await this.page.locator('.btn_action.checkout_button').click();

  }
  
}
