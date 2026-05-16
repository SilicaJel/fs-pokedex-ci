const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:8080',
    headless: true
  },
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: false,
    timeout: 120000
  }
})
