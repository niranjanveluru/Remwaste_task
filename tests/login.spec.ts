import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { userInformation } from '../test-data/users-information';

test('login with invalid credentials', async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(userInformation.username,'wrongpassword');

  page.on('dialog', async (dialog) => {
  expect(dialog.message()).toContain('Invalid username or password');
  await dialog.accept();
  });
  await expect(loginPage.loginButton).toBeVisible();
});
