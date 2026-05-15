const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:8080',
    headless: true
  },
  webServer: {
    command: 'npm run dev',
    port: 8080,
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  }
})