import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { DateTime } from 'luxon';

test.describe('Dashboard tests', () => {

  let dashboardPage: DashboardPage
  const  now = DateTime.now()
  
  test.beforeEach('navigate to employee page', async({page}) => {
         dashboardPage = new DashboardPage(page);
  })

      test('Assert add item validation', async ({page}) => {
      await dashboardPage.goTo();
      await dashboardPage.addItemButton.click();
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Failed to create item. Please add item name');
            await dialog.accept();
        });
      });

      test('Add new item', async () => {
      await dashboardPage.goTo();
      await dashboardPage.addNewItem("item " + now);
      await expect(dashboardPage.page.locator('li', { hasText: "item " + now })).toBeVisible();
      });

      test('Update item', async () => {
      await dashboardPage.goTo();
      await dashboardPage.updateItem("item " + now);
      await expect(dashboardPage.page.locator('li', { hasText: "item updated" })).toBeVisible();
      });

      test('Delete item', async () => {
      await dashboardPage.goTo();
      await dashboardPage.deleteItem("item updated");
      await expect(dashboardPage.page.locator('li', { hasText: "item updated" })).not.toBeVisible();
      });

})