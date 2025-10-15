
import { test, expect } from '../fixtures/testFixture';
import CartPage from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

test('Full checkout flow', async ({ page, productsPage, loginPage }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');

  // Login
  await loginPage.login('standard_user', 'secret_sauce');

  // Products
  await productsPage.isLoaded();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  // Cart
  const cartPage = new CartPage(page);
  await cartPage.verifyCartPage();
  await cartPage.proceedToCheckout();

  // Checkout
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.enterCheckoutInfo('John', 'Doe', '12345');
  await checkoutPage.continueToOverview();
  await checkoutPage.finishCheckout();
  await checkoutPage.verifyOrderComplete();
});
