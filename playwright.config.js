const { devices } = require('@playwright/test')

const viewport = {
  width: 1920,
  height: 1080
}

const options = {
  headless: true,
  ignoreHTTPSErrors: true,
  chromiumSandbox: false
}

const config = {
  projects: [
    // Desktop Browsers
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        ...options,
        ...viewport
      }
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
        ...options,
        ...viewport
      }
    },
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
        ...options,
        ...viewport
      }
    },
    // Mobile Browsers
    {
      name: 'iPhone 12',
      use: {
        ...devices['iPhone 12'],
        ...options
      }
    },
    {
      name: 'Pixel 5',
      use: {
        ...devices['Pixel 5 landscape'],
        ...options
      }
    },
  ]
}

module.exports = config;