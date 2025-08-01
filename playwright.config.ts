import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';
export const storageState = path.join(__dirname, './temp/.auth/user.json');

export default defineConfig({
  //globalSetup: './global-setup',
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 30 * 1000,
  expect: {
    /* Maximum time expect() should wait for the condition to be met. For example in `await expect(locator).toHaveText();` */
    timeout: 10000,
    
  },  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testDir: './setup',
      testMatch: '**/*setup.ts',
    },
    {
      name: 'chromium',
      testMatch: '**/*.spec.ts',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'],
        storageState : storageState,
       },
    },
  ]
});
