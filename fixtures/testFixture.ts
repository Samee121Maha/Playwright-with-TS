// fixtures/testFixture.ts
import { test as base, Page, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';

type MyFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }: { page: Page }, use: (lp: LoginPage) => Promise<void>) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }: { page: Page }, use: (pp: ProductsPage) => Promise<void>) => {
    await use(new ProductsPage(page));
  },
});

export { expect };
