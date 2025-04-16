// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
  const config = ({
  testDir: './tests',
  timeout: 40 * 1000, // 40 seconds
  expect: {
    timeout: 40 * 1000, // 40 seconds
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
   
  },

});
module.exports = config;

