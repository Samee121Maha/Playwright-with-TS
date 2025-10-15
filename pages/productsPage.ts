
import { Page, expect } from '@playwright/test';

export class ProductsPage {
  private inventoryContainer = '.inventory_list';
  private addToCartBtn = '(//button[text()="ADD TO CART"])[1]';
  private cartLink = '.shopping_cart_link';

  constructor(private page: Page) {}

  async isLoaded() {
    await expect(this.page.locator(this.inventoryContainer)).toBeVisible({ timeout: 10000 });
  }

  async addFirstProductToCart() {
    await this.page.locator(this.addToCartBtn).click();
  }

  async goToCart() {
    await this.page.locator(this.cartLink).click();
    await this.page.waitForURL(/cart/);
  }
}
