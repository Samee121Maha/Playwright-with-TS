// pages/loginPage.ts
import { Page } from '@playwright/test';
import { BasePage } from '../utils/basePage';

export default class LoginPage extends BasePage {
  private usernameInput;
  private passwordInput;
  private loginBtn;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'LOGIN' });
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
