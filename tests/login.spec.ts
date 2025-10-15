import { test } from '../fixtures/testFixture';
import usersData from '../test-data/users.json';

const user = usersData[0];

test('Login and save storage state', async ({ page, loginPage, productsPage }) => {
  await page.goto('https://www.saucedemo.com/v1/index.html');

  // Login
  await loginPage.login(user.username, user.password);

  // Wait for products page to load
  await productsPage.isLoaded();

  // Save storage state
  await page.context().storageState({ path: 'state.json' });
});
