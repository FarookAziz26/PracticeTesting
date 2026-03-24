const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    viewport: { width: 1440, height: 900 },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        viewport: { width: 1440, height: 900 },
      },
    },
  ],
});


// ## 🧠 Before you type — understand each part:
// ```
// testDir: './tests'
// → "Look for tests inside the tests/ folder"

// baseURL: 'https://www.saucedemo.com'
// → "Default website for all tests"

// headless: false
// → "Browser WILL OPEN"

// workers: 1
// → "Run one test at a time"
