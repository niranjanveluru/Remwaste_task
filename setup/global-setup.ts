import {  test,expect } from "@playwright/test";
import { storageState } from "../playwright.config";
import { LoginPage } from "../pages/login.page";
import { userInformation } from "../test-data/users-information";

test('global setup', async ({ page}) => {
  let loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login(userInformation.username, userInformation.password);
  // Verify successful login by checking if the dashboard is visible
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.context().storageState({ path: storageState });
});

