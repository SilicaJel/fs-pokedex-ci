const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e-tests',
  workers: process.env.CI ? 1 : undefined,
  webServer: {
    command: 'npm run build && npm start',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 300000
  }
});
