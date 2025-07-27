import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('login with invalid credentials', async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login('admin@test.com','wrongpassword');

  page.on('dialog', async (dialog) => {
  expect(dialog.message()).toContain('Invalid username or password');
  await dialog.accept();
  });
  await expect(loginPage.loginButton).toBeVisible();
});
